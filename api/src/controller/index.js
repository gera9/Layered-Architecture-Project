const Book = require('../model/Book');

// Add a new Book
exports.addBook = async (req, res, next) => {
    const book = new Book(req.body);  
    try {
        await book.save();
        res.status(200).json({ message: 'Libro agregado correctamente.' });
    } catch (error) {
        console.error(error);
        next();
    }
}

// Get all the books
exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        next();
    }
};

// Get book by id
exports.getBookById = async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if(!book) {
        res.status(204).json({ message: 'El libro no ha sido encontrado.' });
        next();
    }
    res.status(200).json(book);
};

// Update book by id
exports.updateBookById = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
        next();
    }
};

// Delete book by id
exports.deleteBookById = async (req, res, next) => {
    try {
        await Book.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'El libro se ha eliminado.' });
    } catch (error) {
        console.error(error);
        next();
    }
};

// *  404 - Not Found *
exports.notFound = (req, res) => {
    res.status(404).json({ message: 'Has escrito mal la URL o no existe lo que estás buscando.' });
};