const express = require('express');
const router = express.Router();
const Book = require('../models/books.model');

// Create a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, pages, isAvailable } = req.body;

    // Validation
    if (!title || !author || !pages) {
      return res.status(400).json({ error: 'Title, author, and pages are required' });
    }

    const book = new Book({ title, author, pages, isAvailable });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit a book
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(204).json(); // No content, successful deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
