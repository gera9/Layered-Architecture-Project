const express = require('express');
const router = express.Router();
const bookController = require('../controller/index');

module.exports = () => {
    // Add Book by POST
    router.post('/books', bookController.addBook);

    // Get all the books
    router.get('/books', bookController.getAllBooks);

    // Get book by id
    router.get('/books/:id', bookController.getBookById);

    // Update book by id
    router.put('/books/:id', bookController.updateBookById);

    // Delete book by id
    router.delete('/books/:id', bookController.deleteBookById);

    router.get('*', bookController.notFound);
    
    return router;
};