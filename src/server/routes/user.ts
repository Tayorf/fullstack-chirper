import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const users =await db.users.getAll()
        res.json(users);
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting all users"});
    }
});

router.get('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
        const [users] =await db.users.getOne(id);

        if(!users){
            res.status(404).json({message:"could not get user with that ID"});
            return;
        }
        res.json(users)
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting that user"});
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
        res.status(500).json({message: "error creating that user"});
    }
});

router.put('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
        const { email, handle } = req.body;
const results = await db.users.update(id, { email, handle });
        if (results.affectedRows===0){
            res.status(404).json({message:"could not update user with that ID"});
            return;

        }
        res.json({Message:"Successfully updated user!"});


    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error updating that user"});
    }
});

router.delete('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
       const results= await db.users.destroy(id);
        if (results.affectedRows===0){
            res.status(404).json({message:"could not delete user with that ID"});
            return;

        }
        res.json({Message:"Successfully deleted user!"});

    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error deleting that user"});
    }
});

export default router;