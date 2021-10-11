
const addBookBtn = document.getElementById('book-btn');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.container');
const bgModal = document.querySelector('.bg-modal')
const bookform = document.querySelector('.book-form');
const booksContainer = document.querySelector('.books-container');

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

addBookBtn.addEventListener('click',() => {openModal()});
closeBtn.addEventListener('click',() => {closeModal()})
bgModal.addEventListener('click',function(event) {
    //if you click on anything except the modal content itself or the "open modal" link, close the modal
    if(!event.target.closest('.modal-content')){
        closeModal();
    }
  })
bookform.addEventListener('submit',function(event){
    event.preventDefault();
    //console.log("form submitted");
    //console.log(bookform.elements['book-title'].value);
    var formData = new FormData(bookform);
    data = {};
    for (var p of formData) {
        let name = p[0];
        let value = p[1];

       data[name] = value;
    }
    addBookToLibrary(data);
    closeModal();
})
function closeModal(){
    document.querySelector('.bg-modal').style.display = 'none';
    bookform.reset();
}

//create the html to show book information
function addBook(data){
    bookNode = document.createElement('div');
    bookNode.classList.add('book');

    let titleNode = document.createElement("h2");
    titleNode.innerHTML = `Title: ${data['book-title']}`;

    let authorNode = document.createElement("h3");
    authorNode.innerHTML = `Author: ${data['author']}`;

    let pageNode = document.createElement("h3");
    pageNode.innerHTML = `Pages: ${data['pages']}`;

    const read = document.getElementById("read").value;
    let readNode = document.createElement("h3");
    readNode.innerHTML = `Read? ${data['read']}`;

    let updateNode = document.createElement("button");
    updateNode.classList = "update";
    updateNode.innerHTML = `Update <i class="fa fa-pen"></i>`;

    let trashNode = document.createElement("button");
    trashNode.classList = "trash";
    trashNode.innerHTML = `Delete <i class="fa fa-trash-alt">`;

    bookNode.appendChild(titleNode);
    bookNode.appendChild(authorNode);
    bookNode.appendChild(pageNode);
    bookNode.appendChild(readNode);
    bookNode.appendChild(updateNode);
    bookNode.appendChild(trashNode);
    booksContainer.appendChild(bookNode);
}

function addBookToLibrary(data){
    data['read'] = (data['read'] == "true");
    console.log(data);

    let book = new Book(data['book-title'],data['author'],data['pages'],data['read'])
    myLibrary.books.push(book);
    addBook(data);
    //booksContainer.innerHTML = `<span>${data['author']}<\span>`
}

function openModal() {
    document.querySelector('.bg-modal').style.display = 'flex';
}



book1_data = {'book-title':'1','author':'1','pages':'1','read':true};
addBook(book1_data);
addBook(book1_data);
myLibrary.books.push(new Book("book 1", "joe bloggs 1", "100",true));

myLibrary.books.push(new Book("book 2", "joe bloggs 2", "200",false));




