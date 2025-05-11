// models/admissionSchema.js
import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required']
  },
  dob: {
    type: String,
    required: [true, 'Date of birth is required']
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['male', 'female', 'other']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  parentName: {
    type: String,
    required: [true, 'Parent/Guardian name is required']
  },
  parentOccupation: {
    type: String
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  email: {
    type: String
  },
  applicationReference: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Admission || mongoose.model('Admission', admissionSchema);