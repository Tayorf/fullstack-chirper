import express from 'express';
import db from '../db';
import { chirps } from '../types';

const chirpsRouter = express.Router();

chirpsRouter.get('/', async(req, res)=>{
    try{
        const chirps =await db.chirps.getAll()
        res.json(chirps);
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting all chirps"});
    }
});

chirpsRouter.get('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
        const [chirps] =await db.users.getOne(id);

        if(!chirps){
            res.status(404).json({message:"could not get chirp with that ID"});
            return;
        }
        res.json( chirps)
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting that chirps"});
    }
});

chirpsRouter.post('/', async(req, res)=>{
    try{
       const { body, location } = req.body;

        if (!body || typeof body !== "string" || body.length < 6 || body.length > 50) {
          res.status(400).json({ message: "body is required and must be between 6 and 50 characters" });
        }

        if (!location || typeof location !== "string" || location.length < 3 || location.length > 20) {
          res.status(400).json({ message: "location is required and must be between 3 and 20 characters" });
        }

        // DB code
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error creating that chirp"});
    }
});

chirpsRouter.put('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
        const { body, location } = req.body;
const results = await db.chirps.update(id, { body, location });
        if (results.affectedRows===0){
            res.status(404).json({message:"could not update chirp with that ID"});
            return;

        }
        res.json({Message:"Successfully updated chirp!"});


    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error updating that chirp"});
    }
});

chirpsRouter.delete('/:id', async (req, res)=>{
    try{
       const id = parseInt(req.params.id);
       
       await db.mentions.destroy(id);
       await db.chirps.destroy(id);
      res.json({ message: "<Ice T voice>: Oh hell yeah" });
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error deleting the mentions associated with that chirp"});
    }
});
export default chirpsRouter;