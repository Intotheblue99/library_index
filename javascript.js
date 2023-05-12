
const formDisplayBtn = document.querySelectorAll("[data-form-target]");
const formCloseBtn = document.querySelectorAll("[data-close-button]");
const backgroundShadow = document.getElementById("background-shadow");
const entry = document.querySelector(".entry");
let movieSelect = document.querySelector("input[value='movie']");
const movieSelected = document.getElementById("m-director");
const bookSelected = document.getElementById("m-author");

let library = [];
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
        console.log("movie")
        bookSelected.classList.add("ns");
        movieSelected.classList.remove("ns");
    } else {
        console.log("book")
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
    
    library.push(obj);
    console.log(library);

    sort(obj)
    data.reset();
});

function sort(obj){
    console.log(obj.type)
};




function movieDisplay(movies) {
    console.log(movies);
};

function bookDisplay(books) {
    console.log(books);
};