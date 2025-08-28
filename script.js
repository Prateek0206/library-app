const myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
  this.id = crypto.randomUUID();
  console.log(this);
  addBookToLib(this);
}

function addBookToLib(book) {
  myLibrary.push(book);
}

let book1 = new Book("Atomic Habits", "G.G Martin");
console.log(myLibrary);


document.querySelectorAll('.catagory-card').forEach(card=>{
    card.addEventListener('click',()=>{
        window.location.href= 'books.html'
    })
})
