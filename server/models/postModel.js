import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    author: {
        type: String
    },
    text: { type: String, require: true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Posts = mongoose.model(`Post`, postSchema);

export default Posts;