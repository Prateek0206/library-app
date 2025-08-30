import { addBookToLib } from "./add-books.js";

export function Book(name, author, desc, pages, readStatus) {
  this.name = name;
  this.author = author;
  this.desc = desc;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
  addBookToLib(this);
}
