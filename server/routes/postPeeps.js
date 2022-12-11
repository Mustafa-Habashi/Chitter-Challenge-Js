import express from "express";
import { check, validationResult } from "express-validator";
import Posts from "../models/postModel.js";


export const router = express.Router();

router
    .route(`/`)
    .post(
        [
            check("text").exists().trim().escape()
        ],


        async (req, res) => {


            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                return res.status(422).json({
                    message: `There is a Error in Posts Data`,
                });
            }



            const peepData = new Posts({
                text: req.body.text,
                createdAt: req.body.createdAt,
                author: req.body.author

            });

            try {
                const peep = await peepData.save();
                console.log(peep)
                res.status(201).json(peep);
            } catch {
                res.status(400).json({
                    message: `Failed to post peep`,
                });
            }
        }
    );