let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.getTitle = () => {
    return this.title;
  };
  this.getAuthor = () => {
    return this.author;
  };
  this.getPages = () => {
    return this.pages;
  };
  this.getRead = () => {
    if (this.read) {
      return "Already read the book!";
    } else {
      return "Not read yet.";
    }
  };
}

function addBookToLibrary(...args) {
  const book = new Book(...args);
  myLibrary.push(book);
}

function modalAction() {
  const title = document.getElementById("title").value;
  
}

function displayBook() {
  myLibrary.forEach((book) => {
    const container = document.getElementById("book_container");
    const div = document.createElement("div");
    div.setAttribute("class", "book_card");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    title.setAttribute("class", "title");
    author.setAttribute("class", "author");
    pages.setAttribute("class", "pages");
    read.setAttribute("class", "read");
    title.innerHTML = "<span>Title : </span> " + book.getTitle();
    author.innerHTML = "<span>Author : </span> " + book.getAuthor();
    pages.innerHTML = "<span>Total Pages : </span> " + book.getPages();
    read.innerHTML = book.getRead();
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    container.appendChild(div);
  });
}

function buttonListener() {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("add_movie");
  const span = document.getElementsByClassName("close")[0];
  
  modal.style.display = "block";
  span.onclick = () => {
    modal.style.display = "none";
  }
  window.onclick = (event) => {
    if(event.target === modal) {
      modal.style.display = "none";
    }
  }
}

addBookToLibrary("the hobbit", "sunil", 976, true);
addBookToLibrary("the hobbir", "sunil", 978, false);
displayBook();