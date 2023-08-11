// book class:Represents a book

class Book{

    constructor(book,author,year){
        this.book = book;
        this.author = author;
        this.year = year;
    }
        
    
}


// UI class: Handle UI taskS

class UI {
  static displayBooks() {
    const StoreBooks = [
      {
        book: "Book One",
        author: "John Doe",
        year: "2013",
      },
      {
        book: "Book Two",
        author: "Jane Doe",
        year: "2016",
      },
    ];
    const books = StoreBooks;

    books.forEach((iterator) => UI.addBookToList(iterator));
  }

  static addBookToList(iterator) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${iterator.book}</td>
            <td>${iterator.author}</td>
            <td>${iterator.year}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    list.appendChild(row);
  }
}


// Store class: Handles storage

// Event: Display books

document.addEventListener("DOMContentLoaded", UI.displayBooks);


// Event: Add a book


// Event: Remove a book

