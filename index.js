import startTime from "./modules/clock.js";
import {booksBtn, addBookbtn, contactBtn, containerBooks, addNew, contact} from "./modules/variables.js";
import printList from "./modules/bookslist.js";

booksBtn.addEventListener('click', () => {
  containerBooks.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  printList();
});

addBookbtn.addEventListener('click', () => {
  containerBooks.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  containerBooks.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
});

window.onload = startTime();
window.onload = printList();