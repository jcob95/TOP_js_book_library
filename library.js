
const addBookBtn = document.getElementById('book-btn');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.container');
const bgModal = document.querySelector('.bg-modal')
const bookform = document.querySelector('.book-form');

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
function addBookToLibrary(data){
    console.log(data);
}
function openModal() {
    document.querySelector('.bg-modal').style.display = 'flex';
}
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




