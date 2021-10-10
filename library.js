
const addBookBtn = document.getElementById('book-btn');
const closeBtn = document.querySelector('.close');

addBookBtn.addEventListener('click',() => {addBookToLibrary()});
closeBtn.addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display = 'none';
})
class library{
    constructor(){
        this.books = [];
    }
}

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


let myLibrary = new library();
myLibrary.books.push(new Book("book 1", "joe bloggs 1", "100",true));
myLibrary.books.push(new Book("book 2", "joe bloggs 2", "200",false));

function addBookToLibrary() {
    document.querySelector('.bg-modal').style.display = 'flex';
}


