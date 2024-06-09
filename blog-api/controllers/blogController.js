import Blog from '../models/Blog.js';

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username email');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username email');
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog' });
  }
};

const createBlog = async (req, res) => {
  const { title, content, images } = req.body;
  try {
    const newBlog = new Blog({ title, content, images, author: req.user.userId });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog' });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    if (blog.author.toString() !== req.user.userId) return res.status(403).json({ error: 'Unauthorized' });
    await blog.remove();
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting blog' });
  }
};

const updateBlog = async (req, res) => {
  const { title, content, images } = req.body;
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    if (blog.author.toString() !== req.user.userId) return res.status(403).json({ error: 'Unauthorized' });

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.images = images || blog.images;

    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog' });
  }
};

const getFilteredBlogs = async (req, res) => {
  const { title, author } = req.query;
  const filter = {};
  if (title) filter.title = { $regex: title, $options: 'i' };
  if (author) filter.author = author;

  try {
    const blogs = await Blog.find(filter).populate('author', 'username email');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

export { getAllBlogs, getBlogById, createBlog, deleteBlog, updateBlog, getFilteredBlogs };
