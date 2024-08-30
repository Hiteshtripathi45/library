let lib = [];

function Book(title, author, page, cond) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.cond = cond;
}

const form = document.querySelector('form');
const create = document.querySelector('.create');
const cancel = document.querySelector('.cancell');
create.addEventListener('click', () => {
    form.style.display = 'flex';
});


cancel.addEventListener('click', () => {
    form.style.display = 'none';
});


const submit = document.querySelector('#submit');
const body = document.querySelector('body');

submit.addEventListener('click', (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const newBook = new Book(title, author, pages, 'read');

    lib.push(newBook);

    const newDiv = document.createElement('div');
    newDiv.style.width = '400px';
    newDiv.style.height = '490px';
    newDiv.style.backgroundImage = 'url(book.jpg)'
    newDiv.style.backgroundSize = 'contain'
    newDiv.style.margin = '20px';
    newDiv.style.borderRadius = '10px';
    newDiv.style.color = 'white'; 
    newDiv.style.fontSize='15px'
    newDiv.style.display = 'flex'
    newDiv.style.padding='40px'
    newDiv.style.flexDirection='column'
    newDiv.style.gap='80px'
    newDiv.style.alignItems='center'
    newDiv.style.justifyContent='centre'



    const bookDetails = document.createElement('h1');

    bookDetails.textContent = `Title: ${newBook.title}`;

    const authorDetails = document.createElement('h1');
    authorDetails.textContent = `Author: ${newBook.author}`;

    const pagesDetails = document.createElement('h1');
    pagesDetails.textContent = `Pages: ${newBook.page}`;
    newDiv.appendChild(bookDetails);
    newDiv.appendChild(authorDetails);
    newDiv.appendChild(pagesDetails);


    body.appendChild(newDiv);
    const but = document.createElement('button')
    but.textContent = 'DELETE'
      
    newDiv.appendChild(but);
    but.addEventListener('click',()=>{
        newDiv.remove()
    })
    

    form.style.display = 'none';

    form.reset();
});

const clear = document.querySelector('.clear');
clear.addEventListener(click,()=>{
    const bookElements = body.querySelectorAll('div');
    bookElements.forEach(book => book.remove());
    lib = [];
})
