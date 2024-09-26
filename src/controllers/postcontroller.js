const Post = require("../models/postModel");
const PostModel = require("../models/postModel");
const UserModel = require("../models/userModel");

// @desc   to create a post

const createPost = async (req, res) => {
  try {
    
    const data = req.body;
    const newPost = new PostModel({
      user: req.user.id,
      description: data.description,
      category:data.category,
    });
    const post = await newPost.save();
    return res.status(201).json({ msg: "Post created", post });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// @desc   to update a post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id; // Get the post ID from the URL parameter
    const data = req.body;

    // Find the post by ID and check if the post belongs to the user
    let post = await PostModel.findOne({ _id: postId, user: req.user.id });

    if (!post) {
      return res.status(404).json({ msg: "Post not found or unauthorized" });
    }

    // Update the post fields only if they are provided in the body
    post.description = data.description || post.description;

    // Save the updated post
    const updatedPost = await post.save();

    return res.status(200).json({ msg: "Post updated successfully", post: updatedPost });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// get all post
const getPost = async (req, res) => {
 try {

   // Find the post by ID and check if the post belongs to the user
   const post = await PostModel.find({}).populate('category');

   if (!post) {
     return res.status(404).json({ msg: "Post not found or unauthorized" });
   }

   return res.status(200).json({ msg: "Post fetched successfully",post });
 } catch(err) {
   return res.status(500).json({ msg: err.message });
 }
};

// delete post
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id; // Get the post ID from the URL parameter

    // Find the post by ID and check if the post belongs to the user
    const post = await PostModel.findOne({ _id: postId, user: req.user.id });

    if (!post) {
      return res.status(404).json({ msg: "Post not found or unauthorized" });
    }

    // Delete the post
    await PostModel.deleteOne({ _id: postId, user: req.user.id });

    return res.status(200).json({ msg: "Post deleted successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { createPost, updatePost, getPost, deletePost };