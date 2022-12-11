import express from 'express';
import Posts from '../models/postModel.js';

export const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        try {
            const peeps = await Posts.find();
            if (peeps.length == 0) throw new Error();
            res.status(200).json(peeps);
        } catch (e) {
            res.status(404).json({ error: "Peeps could not be found" });
        }
    })