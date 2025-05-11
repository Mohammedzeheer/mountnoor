import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
import connectMongo from '../../../libs/mongoDB';
import mongoose from 'mongoose';
import Image from '../../../models/uploadImage';

// ✅ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Connect to MongoDB immediately
connectMongo();

// ✅ Utility: Convert buffer to readable stream
const bufferToStream = (buffer) => {
  return new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
};

// ✅ POST handler
export async function POST(request) {
  try {
    const formData = await request.formData();

    const title = formData.get('title');
    const description = formData.get('description') || '';
    const category = formData.get('category');
    const imageFile = formData.get('image');
    // ✅ Required fields check
    if (!title || !category || !imageFile) {
      return NextResponse.json(
        { success: false, message: 'Title, category, and image are required.' },
        { status: 400 }
      );
    }
    console.log('Form data received:', 2);
    // ✅ File type validation
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(imageFile.type)) {
      return NextResponse.json(
        { success: false, message: 'Only JPG, PNG, and WEBP images are allowed.' },
        { status: 400 }
      );
    }
    console.log('Form data received:', 3);
    // ✅ Read file as buffer
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // ✅ Upload to Cloudinary
    return new Promise((resolve) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'uploaded_images',
          resource_type: 'image',
        },
        async (error, result) => {
          if (error) {
            console.log('Cloudinary error:', 5, error);
            return resolve(
              NextResponse.json(
                { success: false, message: 'Image upload failed' },
                { status: 500 }
              )
            );
          }

          try {
            // Check DB connection
            if (mongoose.connection.readyState !== 1) {
              console.error('MongoDB not connected');
              await cloudinary.uploader.destroy(result.public_id);
              return resolve(
                NextResponse.json(
                  { success: false, message: 'Database connection error' },
                  { status: 500 }
                )
              );
            }
            // Save metadata to MongoDB
            const newImage = await Image.create({
              title,
              description,
              category,
              imageUrl: result.secure_url,
              publicId: result.public_id,
              width: result.width,
              height: result.height,
              format: result.format,
              createdAt: new Date(),
            });
            return resolve(
              NextResponse.json({
                success: true,
                message: 'Image uploaded and saved successfully',
                data: {
                  imageUrl: newImage.imageUrl,
                  publicId: newImage.publicId,
                },
              })
            );
          } catch (dbError) {
            console.error('Database error:', dbError);
            await cloudinary.uploader.destroy(result.public_id);
            return resolve(
              NextResponse.json(
                { success: false, message: 'Failed to save image metadata', error: dbError.message },
                { status: 500 }
              )
            );
          }
        }
      );

      // Pipe buffer stream to Cloudinary
      const fileStream = bufferToStream(buffer);
      fileStream.pipe(stream);
    });
  } catch (err) {
    console.error('Unhandled server error:', err);
    return NextResponse.json(
      { success: false, message: 'Server error', error: err.message },
      { status: 500 }
    );
  }
}


// ✅ GET handler
export async function GET() {
  try {
    // Ensure MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      await connectMongo();
    }

    const images = await Image.find().sort({ createdAt: -1 }); 
    console.log('Fetched images:', images);

    return NextResponse.json({
      success: true,
      data: images,
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch images', error: error.message },
      { status: 500 }
    );
  }
}
