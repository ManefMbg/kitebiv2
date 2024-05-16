import express from 'express';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router()

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email,password})
    if (!user){
        res.sendStatus(403)
    }
    res.json(user)
    console.log("Successful")

}) 

export {router as AdminRouter}