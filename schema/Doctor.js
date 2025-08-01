import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: String, // e.g., "26 years experience overall"
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  clinicName: {
    type: String,
    required: true,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  patientStories: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  availableToday: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
