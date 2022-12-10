import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, require: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }

});

const Users = mongoose.model(`User`, userSchema);

export default Users;