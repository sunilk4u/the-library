let myLibrary = [];

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    read_str = "";
    if (this.read) {
      read_str = "already read";
    } else {
      read_str = "not read yet";
    }
    return (
      this.title + " by " + this.author + ", " + this.pages + ", " + read_str
    );
  };
}

function addBookToLibrary() {
  
}
