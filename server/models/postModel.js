import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    author: {
        type: String, required: true
    },
    text: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Posts = mongoose.model(`Post`, postSchema);

export default Posts;