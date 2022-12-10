import express from 'express';

export const router = express.Router();

import Users from '../models/userModel.js';

router.route(`/`)
    .post((req, res) => {
        const { email, password } = req.body;

        Users.findOne({ email }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Login success`, user });
            }
            else {
                res.status(404).send({ message: `Details not found` });
            }

        });
    });
