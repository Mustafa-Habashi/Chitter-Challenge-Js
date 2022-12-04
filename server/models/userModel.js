import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userId: { type: Number, required: true, unique: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    contactNum: { type: Number, require: true },
    gender: { type: String, require: true }
});

const Users = mongoose.model(`User`, userSchema);

export default Users;