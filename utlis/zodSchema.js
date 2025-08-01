import {z} from "zod"


export const doctorSchema = z.object({
  name: z.string(),
  specialization: z.string(),
  experience: z.string(),
  location: z.string(),
  clinicName: z.string(),
  consultationFee: z.number(),
  rating: z.number(), 
  patientStories: z.number(),
  imageUrl: z.string().url(),
  availableToday: z.boolean(),
});


export const fetchValidation = z.object({
  location: z.string(),
  specialization: z.string(),   
})