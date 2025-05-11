// app/api/admission/route.js
import { NextResponse } from 'next/server';
import connectMongo from "../../../libs/mongoDB";
import AdmissionModel from "../../../models/Admission";

// Generate a unique application reference
const generateReference = () => {
  return 'CAL-' + Math.floor(100000 + Math.random() * 900000);
};

export async function POST(req) {
  try {
    // Connect to MongoDB
    await connectMongo();

    const formData = await req.json();

    // Generate a unique application reference
    const applicationReference = generateReference();

    // Create new admission document
    const newAdmission = await AdmissionModel.create({
      ...formData,
      applicationReference
    });

    return NextResponse.json({
      message: 'Application submitted successfully',
      applicationReference,
      status: 201,
      success: true,
      data: newAdmission
    });

  } catch (error) {
    console.error("Failed to submit application:", error.message, error.stack);

    if (error.name === 'ValidationError') {
      const validationErrors = {};

      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }

      return NextResponse.json({
        message: "Validation failed",
        errors: validationErrors,
        status: 400,
        success: false
      });
    }

    if (error.code === 11000) {
      return NextResponse.json({
        message: "Duplicate entry detected",
        error: error.message,
        status: 409,
        success: false
      });
    }

    return NextResponse.json({
      message: "Failed to submit application",
      error: error.message,
      status: 500,
      success: false
    });
  }
}


export async function GET(req) {
  try {
    await connectMongo();

    const applications = await AdmissionModel.find({})
      .sort({ createdAt: -1 })
      .select('-__v');

    return NextResponse.json({
      message: 'Applications retrieved successfully',
      count: applications.length,
      data: applications,
      status: 200,
      success: true
    });

  } catch (error) {
    console.error("Failed to retrieve applications:", error.message, error.stack);

    return NextResponse.json({
      message: "Failed to retrieve applications",
      error: error.message,
      status: 500,
      success: false
    });
  }
}