class Book {
    constructor(title, numberOfPages, status, price, totalPages, format, suggestedBy) {
        this.title = title;
        this.numberOfPages = numberOfPages;
        this.status = status;
        this.price = price;
        this.totalPages = totalPages;
        this.format = format;
        this.suggestedBy = suggestedBy;
        this.finished = false;
    }

    currentlyAt(pagesRead) {
        if (pagesRead >= this.numberOfPages) {
            this.finished = true;
        }
    }

    deleteBook(title) {
        if (this.title === title) {
            
            console.log(`Book "${this.title}" deleted.`);
        }
    }
}

module.exports = Book;
