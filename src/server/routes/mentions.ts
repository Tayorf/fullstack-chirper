import express from 'express';
import db from '../db';

const router = express.Router();

// routes/mentions.ts

router.post('/', async(req, res)=>{
    try{
       const { chirp_id, user_id } = req.body;

        if (!chirp_id || !user_id) {
          res.status(400).json({ message: "More relevant message here pertaining to chirp and user ids"});
        }
      
        const mentionPair = { chirps_id: chirp_id, users_id: user_id };

        res.status(201).json({ message: "<Ice T voice>: Oh hell yeah" });
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error creating that mention"});
    }
});
export default router;