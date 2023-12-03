// 14:17

// Add function that take user's input and store to array.
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

// Create a function render() to render the book to HTML file
function render() {
  const libraryEl = document.querySelector('#library-container');

  // Clear the existing content in the library container
  libraryEl.innerHTML = '';

  myLibrary.forEach((book, index) => {
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

    // remove btn
    const removeButton = document.createElement('button');
    removeButton.textContent = 'REMOVE';
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('data-index', index);
    removeButton.addEventListener('click', removeBook);
    bookCard.appendChild(removeButton);

    // toggle btn for read or not read
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'STATUS';
    toggleButton.classList.add('toggle-button');
    toggleButton.setAttribute('data-index', index); // Associate with the book's index
    toggleButton.addEventListener('click', toggleReadStatus);
    bookCard.appendChild(toggleButton);

    libraryEl.appendChild(bookCard);
  });
}

function removeBook(event) {
  const indexToRemove = event.target.getAttribute('data-index');
  myLibrary.splice(indexToRemove, 1);
  render();
}

function toggleReadStatus(event) {
  const indexToToggle = event.target.getAttribute('data-index');
  myLibrary[indexToToggle].toggleReadStatus();
  render(); // Re-render the library after toggling the read status
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
