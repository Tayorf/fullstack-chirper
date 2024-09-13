import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const user =await db.mentions.getAll()
        res.json(user);
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting all mentions"});
    }
});

router.get('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
        const [mentions] =await db.mentions.getOne(id);

        if(!mentions){
            res.status(404).json({message:"could not get mention with that ID"});
            return;
        }
        res.json(mentions)
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting that mention"});
    }
});

router.post('/', async(req, res)=>{
    try{
       const { email, handle } = req.body;

        if (!email || typeof email !== "string" || email.length < 6 || email.length > 50) {
          res.status(400).json({ message: "Email's required and must be between 6 and 50 characters" });
        }

        if (!handle || typeof handle !== "string" || handle.length < 4 || handle.length > 20) {
          res.status(400).json({ message: "Handle is required and must be between 4 and 20 characters" });
        }

        // DB code
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error creating that post"});
    }
});

router.delete('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
       const results= await db.mentions.destroy(id);
        if (results.affectedRows===0){
            res.status(404).json({message:"could not delete mention with that ID"});
            return;

        }
        res.json({Message:"Successfully deleted mention!"});

    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error deleting that mention"});
    }
});

export default router;