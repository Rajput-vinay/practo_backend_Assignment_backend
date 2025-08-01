import express from "express";
import Doctor from "../schema/Doctor.js";
import { doctorSchema,fetchValidation } from "../utlis/zodSchema.js"; 

const router = express.Router();

router.post("/create", async (req, res) => {
  const result = doctorSchema.safeParse(req.body);

  // If validation fails
  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }

  try {
    const {
      name,
      specialization,
      experience,
      location,
      clinicName,
      consultationFee,
      rating,
      patientStories,
      imageUrl,
      availableToday,
    } = result.data;

    const doctor = await Doctor.create({
      name,
      specialization,
      experience,
      location,
      clinicName,
      consultationFee,
      rating,
      patientStories,
      imageUrl,
      availableToday,
    });

    return res.status(201).json({
      message: "Doctor created successfully",
      doctor,
    });

  } catch (error) {
    console.error("Error creating doctor:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post('/search', async(req, res) =>{
    const result = fetchValidation.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({error: result.error.errors});
    }

    try {
        const {location, specialization} = result.data;
  
      
        const doctors = await Doctor.find({
            location:{$regex: new RegExp(location, 'i')},
            specialization:{$regex: new RegExp(specialization, 'i')}
        });

        if(doctors.length === 0){
            return res.status(404).json({
                message:"No doctors found"
            })

        }

        return res.status(200).json({
            message:"Doctors found",
            doctors
        })

    } catch (error) {
        console.error("Search error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
    }

})

export default router;
