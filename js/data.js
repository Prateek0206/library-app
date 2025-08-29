import { Book } from "./create-object.js";

export let myLibrary = getFromStorage() ? getFromStorage() : [];
console.log(myLibrary);

export function saveToStorage(myLibrary) {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

export function getFromStorage() {
  return JSON.parse(localStorage.getItem("myLibrary"));
}

/*let book1 = new Book(
  "Atomic Habits",
  "G.G Martin",
  "A deep dive into the hidden science of routines, showing how small, daily adjustments can compound into extraordinary transformations in work, relationships, and personal growth.",
  284
);

 let book2 = new Book(
  "Physics",
  "G. Newman",
  "An engaging exploration of the universe’s rules — from the dance of particles to the vastness of galaxies. It simplifies Newton’s laws, relativity, and quantum puzzles for curious minds.",
  412
);

let book3 = new Book(
  "Poor Dad",
  "R.R Martin",
  "A fictional memoir about overcoming poverty and misguided advice from the past, contrasting two father figures: one bound by limitation, the other inspiring wealth through wisdom and creativity.",
  356
);

let book4 = new Book(
  "Chemistry",
  "D.C Pandey",
  "Comprenshive chemistry for class 11 and 12",
  1304
); */
