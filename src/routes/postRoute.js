const express = require('express');
const { createPost,updatePost,getPost,deletePost } = require('../controllers/postcontroller');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @route   POST /api/posts/create
 * @desc    Create a post
 * @access  Private
 * @returns response of post creation with status code and post data
 */
// create post
router.post('/create',authMiddleware, createPost);
// update post
router.put('/update',authMiddleware, updatePost);
// get post
router.get('/get',authMiddleware, getPost)
// delete post
router.delete('/delete',authMiddleware, deletePost);

module.exports = router;
