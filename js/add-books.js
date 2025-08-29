import { Book } from "./create-object.js";
import { myLibrary, saveToStorage } from "./data.js";
import { displayBooks } from "./display-books.js";

export function addBookToLib(newBook) {
  myLibrary.push(newBook);
  saveToStorage(myLibrary);

  console.log(newBook);

  /* if (myLibrary.length === 0) {
    console.log("if");
    myLibrary.push(newBook);

    console.log(myLibrary);
  } else {
    console.log("else");

    myLibrary.forEach((book) => {
      if (book.name === newBook.name) {
        alert("BOOK ALREADY EXIST!!!");
      } else {
        myLibrary.push(newBook);
      }
    }); */
}

function addBooks() {
  console.log("add books");
  let bookName = document.getElementById("book-name").value;
  let authorName = document.getElementById("author").value;
  let desc = document.getElementById("desc").value;
  let pages = document.getElementById("pages").value;

  let newBook = new Book(bookName, authorName, desc, pages);
  window.location.href='../books.html'
  console.log(newBook);
}

document.addEventListener("DOMContentLoaded", () => {
  const postButton = document.querySelector(".js-post-button");
  if (postButton) {
    postButton.addEventListener("click", () => {
      console.log("post-button");
      addBooks();
    });
  }
});
