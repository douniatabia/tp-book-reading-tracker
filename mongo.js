// app.js
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book');

const app = express();
const port = 3000;
const bookSchema = new mongoose.Schema({
    title: String,
    numberOfPages: Number,
    pagesRead: Number,
    // Other fields as needed
    title: String,
    numberOfPages: Number,
    status: String,
    price : Number,
    totalPages : Number,
    format: String,
    suggestedBy : String,
    finished : Boolean,
});
mongoose.connect('mongodb://localhost/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const books = await Book.find();
    const totalBooks = books.length;
    const totalPagesRead = books.reduce((acc, book) => acc + book.pagesRead, 0);

    res.render('books', { books, totalBooks, totalPagesRead });
});

app.post('/add-book', async (req, res) => {
    const { title, numberOfPages, price, totalPages,format,suggestedBy,finished} = req.body;
    const book = new Book({ title, numberOfPages, price, totalPages,format,suggestedBy,finished});
    await book.save();
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
