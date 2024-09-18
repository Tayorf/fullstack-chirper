import express from 'express';
import db from '../db';

const router = express.Router();

// routes/mentions.ts

router.post('/', async(req, res)=>{
    try{
       const { chirp_id, user_id } = req.body;

        // In addition to checking for their existance, you could also potentially add in checks to see if `typeof chirp_id !== "number" || typeof user_id !== "number"`  
        if (!chirp_id || !user_id) {
          res.status(400).json({ message: "More relevant message here pertaining to chirp and user ids"});
        }
      
        // Repackage into a new object named mentionPair for consistency's sake
        const mentionPair = { chirp_id: chirp_id, user_id: user_id };
        // DB code to insert the mention pair
        res.status(201).json({ message: "<Ice T voice>: Oh hell yeah" });
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error creating that mention"});
    }
});
export default router;