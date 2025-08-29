import { myLibrary } from "./data.js";

console.log("Script loaded");
const bookGrid = document.getElementById("book-grid");

export function displayBooks(newCard) {
  console.log(newCard);
  if (!bookGrid) {
    console.warn("No book-grid element found on this page.");
    return; // Exit safely if you're on a page without it
  }
  console.log("displayBooks");
  console.log(newCard);

  let card = document.createElement("div");
  card.classList.add("book-detail");

  let image = document.createElement("img");
  image.setAttribute(
    "src",
    `https://picsum.photos/seed/${newCard.id}/200/300`
  );

  let bookName = document.createElement("h2");
  bookName.textContent = newCard.name;

  let author = document.createElement("h4");
  author.textContent = newCard.author;

  let pages = document.createElement("p");
  pages.textContent = `${newCard.pages} pages`;

  let desc = document.createElement("p");
  desc.textContent = newCard.desc;

  let metaData = document.createElement("div");
  metaData.classList.add("metadata");
  metaData.append(bookName, author, pages, desc);

  card.append(image, metaData);
  console.log(card.innerHTML);

  bookGrid.appendChild(card);
  console.log(myLibrary);
  console.log("nope");
}

/*  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("book-detail");

    let image = document.createElement("img");
    image.setAttribute(
      "src",
      `https://picsum.photos/200/300?random=${Math.random()}`
    );

    let bookName = document.createElement("h2");
    bookName.textContent = book.name;

    let author = document.createElement("h4");
    author.textContent = book.author;

    let pages = document.createElement("p");
    pages.textContent = `${book.pages} pages`;

    let desc = document.createElement("p");
    desc.textContent = book.desc;

    let metaData = document.createElement("div");
    metaData.classList.add("metadata");
    metaData.append(bookName, author, pages, desc);

    card.append(image, metaData);

    document.getElementById("book-grid").appendChild(card);
  }); */
document.addEventListener("DOMContentLoaded", () => {
  myLibrary.forEach((book) => {
    displayBooks(book)
  });
});
