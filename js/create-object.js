import { addBookToLib } from "./add-books.js";


export function Book(name, author, desc, pages) {
  this.name = name;
  this.author = author;
  this.desc = desc;
  this.pages = pages;
  this.id = crypto.randomUUID();
  addBookToLib(this);
}
