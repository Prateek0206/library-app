document.querySelectorAll(".catagory-card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "/library-app/books.html";
  });
});

document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "/library-app/index.html";
});

const interactiveButton = document.querySelector(".interactive-button");

if (interactiveButton) {
  interactiveButton.addEventListener("click", () => {
    window.location.href = "/library-app/add-books.html";
  });
}

const deleteAllButton = document.getElementById("delete-all");

if (deleteAllButton) {
  deleteAllButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
  });
}