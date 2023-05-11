

//make a button at the end of the form to take this place //
// let addButton = document.querySelector(".add-media"); //

const formDisplayBtn = document.querySelectorAll("[data-form-target]");
const formCloseBtn = document.querySelectorAll("[data-close-button]");
const backgroundShadow = document.getElementById("background-shadow");
const entry = document.querySelector(".entry");

let library = [];
let movies = [];
let books = [];

function Media(type, title, year, author, director) {
    this.type = type;
    this.title = title;
    this.year = year;
    if (type === "movie") {
        this.director = director;
    } else {
        this.author = author;
    };
};

const entry1 = new Media("movie", "A weekend at malibu", "1999", null, "sardine mccobb");

const entry2 = new Media("book", "the phantom dooker", "2003", "sardine mccobb");
const entry3 = new Media("book", "lovelust", "2066", "sardine mccobb", );

console.log(entry1, entry2)

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

let eep = 0;
entry.addEventListener("click", ()=>{
    eep++;
    console.log(eep)
});
console.log(eep);


// addButton.addEventListener('click', ()=>{
//     if(entry1.type === "movie") {
//         movies.push(entry1);
//         movieDisplay(movies);
//     } else {
//         books.push(entry1);
//         bookDisplay();
//     };
  
// });


function movieDisplay(movies) {
    console.log(movies);
};

function bookDisplay(books) {
    console.log(books);
};