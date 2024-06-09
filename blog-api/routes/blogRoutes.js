import express from 'express';
import { getAllBlogs, getBlogById, createBlog, deleteBlog, updateBlog, getFilteredBlogs } from '../controllers/blogController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/filter', getFilteredBlogs);
router.get('/:id', getBlogById);
router.post('/', authMiddleware, createBlog);
router.delete('/:id', authMiddleware, deleteBlog);
router.put('/:id', authMiddleware, updateBlog);

export default router;
