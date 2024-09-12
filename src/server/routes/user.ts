import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const user =await db.user.getAll()
        res.json(user);
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting all users"});
    }
});

router.get('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
        const [user] =await db.user.getOne(id);

        if(!user){
            res.status(404).json({message:"could not get user with that ID"});
            return;
        }
        res.json(user)
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error getting that user"});
    }
});

router.post('/', async(req, res)=>{
    try{
        const {}
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error creating that user"});
    }
});

router.put('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{

    } catch (error) {
        console.log (error);
        res.status(500).json({message: "error updating that user"});
    }
});

router.delete('/:id', async(req, res)=>{
    const id=parseInt(req.params.id);
    try{
       const results= await db.user.destroy(id);
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