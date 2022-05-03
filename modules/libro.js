import {
  addNew, titulo, autor, addBtn, dataBooks,
} from './variables.js';

export default class Libro {
  constructor(title, author) {
    this.dataBooks = [title, author];
    this.title = title;
    this.author = author;
  }

  deleteBook = (index) => {
    dataBooks.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }

  addBook = (libro) => {
    dataBooks.push(libro);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }
}

addBtn.addEventListener('click', () => {
  const libro = new Libro(titulo.value, autor.value);
  libro.addBook(libro);
  addNew.reset();
});