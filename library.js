
const addBookBtn = document.getElementById('book-btn')

addBookBtn.addEventListener('click',() => {addBookToLibrary()});
let myLibrary = new library();

class Book {
    constructor(title='unknown', author='unknown', pages=0, read=false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            let info_str = `${this.title} by ${author}, ${pages} long, Have read: ${this.read}`;
            return info_str;
        };
    }
}

class library{
    constructor(){
        this.books = [];
    }
}

myLibrary.books.push(new Book("book 1", "joe bloggs 1", "100",true));
myLibrary.books.push(new Book("book 2", "joe bloggs 2", "200",false));

function addBookToLibrary() {
  document.getElementById('book-form-popup').style.display = 'block';
  addBookBtn.style.display = 'none';
}

function closeForm(){
    document.getElementById('book-form-popup').style.display = 'none';
    addBookBtn.style.display = 'inline-block';
}

