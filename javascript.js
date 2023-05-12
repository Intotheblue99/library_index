
const formDisplayBtn = document.querySelectorAll("[data-form-target]");
const formCloseBtn = document.querySelectorAll("[data-close-button]");
const backgroundShadow = document.getElementById("background-shadow");
const entry = document.querySelector(".entry");
let movieSelect = document.querySelector("input[value='movie']");
const movieSelected = document.getElementById("m-director");
const bookSelected = document.getElementById("m-author");

let movies = [];
let books = [];

function Media(type, title, year, author, director) {
    this.type = type;
    this.title = title;
    this.year = year;
    if (type === "movie") {
        this.author = null;
        this.director = director;
    } else {
        this.author = author;
        this.director = null;
    };
};

const entry1 = new Media("movie", "A weekend at malibu", "1999", null, "sardine mccobb");
const entry2 = new Media("book", "the phantom dooker", "2003", "sardine mccobb");

console.log(entry1, entry2)
// console.log(entry1.type)

formDisplayBtn.forEach(button => {
    button.addEventListener("click", () => {
        const form = document.querySelector(button.dataset.formTarget);
        openForm(form);
    });
});

backgroundShadow.addEventListener("click", ()=>{
    const forms = document.querySelectorAll(".media-form.active");
    forms.forEach(form => {
        closeForm(form);
    });
});

formCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        const form = button.closest(".media-form")
        closeForm(form);
    });
});

function openForm(form) {
    if (form == null) return
    form.classList.add("active");
    backgroundShadow.classList.add("active");
};

function closeForm(form) {
    if (form == null) return
    form.classList.remove("active");
    backgroundShadow.classList.remove("active");
};

function mediaInputVisibility() {
    if (movieSelect.checked) {
        bookSelected.classList.add("ns");
        movieSelected.classList.remove("ns");
    } else {
        movieSelected.classList.add("ns");
        bookSelected.classList.remove("ns");
    };
};

movieSelect.addEventListener("change", mediaInputVisibility);
document.querySelector("input[value='book']").addEventListener("change", mediaInputVisibility);


entry.addEventListener("click", ()=>{
    const forms = document.querySelectorAll(".media-form.active");
    forms.forEach(form => {
        closeForm(form);
    });
});
// const entry1 = new Media("movie", "A weekend at malibu", "1999", null, "sardine mccobb");
const data = document.querySelector(".form-body");



data.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    const type = data.elements.type.value;
    const title = data.elements.title.value;
    const year = data.elements.year.value;
    const author = data.elements.author.value;
    const director = data.elements.director.value;
    const obj = new Media(type, title, year, author, director);
    sort(obj)
    data.reset();
});

function sort(obj){
    if (obj.type === "movie") {
        movies.push(obj);
        movieDisplay(movies);
        console.log(movies)
    } else {
        books.push(obj);
        bookDisplay(books);
        console.log(books);
    };

};

const movieShelf = document.querySelector(".movies-display");
const bookShelf = document.querySelector(".books-display");
let library = [];

function createCard(item){
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("p");
    cardTitle.textContent = item.title;

    const cardYear = document.createElement("p");
    cardYear.textContent = item.year;

    card.appendChild(cardTitle);
    card.appendChild(cardYear);
    return card;
}


function movieDisplay(movies) {
    const available = movies.filter(item => !library.includes(item));
    console.log(available);
    
    if (available.length > 0) {
        const newItem = available[0];
        library.push(newItem);

        const card = createCard(newItem);
        movieShelf.appendChild(card);
    };
};

//save this code: appends new items from growing array without repeating//
function bookDisplay(books) {
    const available = books.filter(item => !library.includes(item));
    console.log(available);
    
    if (available.length > 0) {
        const newItem = available[0];
        library.push(newItem);

        const card = createCard(newItem);
        bookShelf.appendChild(card);
    };
};