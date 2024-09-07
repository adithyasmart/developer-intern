const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.getAll();
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.getById(req.params.id);
  res.json(post);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).send('Title and content are required');
  const newPost = await Post.create(title, content);
  res.status(201).json(newPost);
});

router.delete('/:id', async (req, res) => {
  await Post.delete(req.params.id);
  res.status(204).send();
});

module.exports = router;
