
const addBookBtn = document.getElementById('book-btn');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.container');
const bgModal = document.querySelector('.bg-modal')
const bookform = document.querySelector('.book-form');
const booksContainer = document.querySelector('.books-container');

let globalID = 0; //set the ID for all books. Avoids problems with ids using element indexes

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
        this.bookid = globalID++;
    }
}

let myLibrary = [];

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

//function to loop over library books and render them
function render(){
    booksContainer.innerHTML = "";
    myLibrary.forEach(function(book) {
        addBook(book);
    })
};

function addBook(book){
    console.log(`adding book: ${book.title}, author:${book.author}`);
    bookNode = document.createElement('div');
    bookNode.classList.add('book');

    let titleNode = document.createElement("h2");
    titleNode.innerHTML = `Title: ${book.title}`;

    let authorNode = document.createElement("h3");
    authorNode.innerHTML = `Author: ${book.author}`;

    let pageNode = document.createElement("h3");
    pageNode.innerHTML = `Pages: ${book.pages}`;

    //const read = document.getElementById("read").value;
    let readNode = document.createElement("h3");
    readNode.innerHTML = `Read: ${book.read}`;

    let updateNode = document.createElement("button");
    updateNode.classList = "update";
    updateNode.innerHTML = `Update <i class="fa fa-pen"></i>`;


    let trashNode = document.createElement("button");
    trashNode.classList = "trash";
    trashNode.innerHTML = `Delete <i class="fa fa-trash-alt">`;
    trashNode.addEventListener('click',()=>{
        myLibrary.splice(myLibrary.indexOf(book),1);
        render()
    })
    
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
    let book = new Book(data['book-title'],data['author'],data['pages'],data['read']);
    console.log(book.title);
    myLibrary.push(book);
    render()
    //addBook(data);
    //booksContainer.innerHTML = `<span>${data['author']}<\span>`
}

function openModal() {
    document.querySelector('.bg-modal').style.display = 'flex';
}



//book1_data = {'book-title':'1','author':'1','pages':'1','read':true};
myLibrary.push(new Book("book 1", "joe bloggs 1", "100",true));
myLibrary.push(new Book("book 2", "joe bloggs 2", "200",false));
render()



