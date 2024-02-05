import express from "express";
import { createBook, getBook, editBook, deleteBook, getBooks } from '../controllers/books.js'

const router = express.Router();


// all routes start with /books
router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', createBook)

router.patch('/:id', editBook)

router.delete('/:id', deleteBook)

export default router;