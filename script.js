// Add function that take user's input and store to array.
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

// New book button
const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', function () {
  const formContainer = document.querySelector('.form-container');
  formContainer.style.display = 'block';
});

document
  .querySelector('#new-book-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
