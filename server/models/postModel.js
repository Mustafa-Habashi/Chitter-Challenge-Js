import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: { type: String }
});

const Posts = mongoose.model(`Post`, postSchema);

export default Posts;