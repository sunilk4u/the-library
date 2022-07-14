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
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read =document.getElementById("read");
  const modal = document.getElementById("modal");

  if(title.trim() === "") {
    document.getElementById("error").textContent = "Title cannot be empty";
    document.getElementById("error").style.display = "block";
    return
  }
  else if (author.trim() === "") {
    document.getElementById("error").textContent = "Author cannot be empty";
    document.getElementById("error").style.display = "block";
    return
  }
  else if (pages.trim() === "") {
    document.getElementById("error").textContent = "Pages cannot be empty";
    document.getElementById("error").style.display = "block";
    return
  }
  
  if(read.checked === true) {
    addBookToLibrary(title, author, pages, true);
  }
  else {
    addBookToLibrary(title, author, pages, false);
  }
  displayBook();
  document.getElementById("modalForm").reset();
  modal.style.display = "none";
}

function displayBook() {
  const container = document.getElementById("book_container");
  container.innerHTML = "";
  myLibrary.forEach((book) => {
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

const submit = document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
})

addBookToLibrary("the hobbit", "sunil", "976", true);
addBookToLibrary("the hobbir", "sunil", "978", false);
displayBook();