
import dotenv from "dotenv";
import express from 'express';
import bcryptjs from 'bcrypt'
import jwt from "jsonwebtoken";
import Users from '../models/userModel.js';

dotenv.config()

export const router = express.Router();
const { SECRET = "secret" } = process.env;


router.route('/')
    .post(async (req, res) => {
        try {

            // check if the user exists
            const user = await Users.findOne({ email: req.body.email });
            if (user) {
                console.log(user)
                //check if password matches

                const result = await bcryptjs.compare(req.body.password, String(user.password).trim());

                console.log(result)

                if (result) {

                    // sign token and send it in response
                    const token = await jwt.sign({ username: user.userName }, SECRET);
                    res.json({ token });
                } else {
                    res.status(400).json({ error: "password doesn't match" });
                }
            } else {
                res.status(400).json({ error: "User doesn't exist" });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    });

