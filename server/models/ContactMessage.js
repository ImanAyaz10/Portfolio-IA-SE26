import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
      maxlength: [120, 'Email cannot exceed 120 characters'],
    },
    subject: {
      type: String,
      trim: true,
      default: 'General Inquiry',
      maxlength: [150, 'Subject cannot exceed 150 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
      maxlength: [3000, 'Message cannot exceed 3000 characters'],
    },
    roleOrCompany: {
      type: String,
      trim: true,
      default: '',
      maxlength: [120, 'Role/Company cannot exceed 120 characters'],
    },
    status: {
      type: String,
      enum: ['unread', 'read', 'archived'],
      default: 'unread',
    },
    ipAddress: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
