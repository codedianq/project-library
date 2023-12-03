// 14:17

// Add function that take user's input and store to array.
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Create a function render() to render the book to HTML file
function render() {
  const libraryEl = document.querySelector('#library-container');

  // Clear the existing content in the library container
  libraryEl.innerHTML = '';

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    const pTitle = document.createElement('h1');
    const pAuthor = document.createElement('h3');
    const pPages = document.createElement('h4');
    const pRead = document.createElement('p');

    pTitle.textContent = `${book.title}`;
    pAuthor.textContent = `By: ${book.author}`;
    pPages.textContent = `Pages: ${book.pages}`;
    pRead.textContent = `Status: ${book.read ? 'Done' : 'On progress'}`;

    bookCard.appendChild(pTitle);
    bookCard.appendChild(pAuthor);
    bookCard.appendChild(pPages);
    bookCard.appendChild(pRead);

    bookCard.classList.add('book-card');

    libraryEl.appendChild(bookCard);
  });
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
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
