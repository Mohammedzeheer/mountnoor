import mongoose from 'mongoose';

// Define the image schema
const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  publicId: {
    type: String,
    required: [true, 'Public ID is required']
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  format: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Check if the model already exists to prevent overwriting
const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;