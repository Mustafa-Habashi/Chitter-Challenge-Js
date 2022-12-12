
import express from "express";
import { check, validationResult } from "express-validator";
import Users from "../models/userModel.js";
import bcryptjs from 'bcrypt'


export const router = express.Router();

router
    .route(`/`)
    .post(
        [
            check("name").exists().trim().escape(),
            check("userName").exists().trim(),
            check("email").exists().trim().escape().isEmail(),
            check("password").exists().trim().escape(),

        ],
        async (req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                return res.status(422).json({
                    message: `There is a Error in User Data`,
                });
            }


            try {
                req.body.password = await bcryptjs.hash(req.body.password, 10)

                const user = await (await Users.create(req.body)).save();
                res.status(201).json(user);
                res.send({ message: `Registration successful` })

                res.json(user);
            } catch {
                res.status(400).json({
                    message: `Failed to create new user`,
                });
            }
        }
    );


