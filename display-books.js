import { myLibrary } from "./script.js";

function displayBooks(myLibrary) {
  myLibrary.forEach((book) => {
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
  });
}

window.addEventListener("load", () => {
  displayBooks(myLibrary);
});
