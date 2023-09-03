const divContainer = document.querySelector('.container')
divContainer.textContent = 'Hello from JS'


const numberOfFilms = prompt(
  "How many films were you watched",
  "Specify the number"
);


const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   privat : false
}



const lastFilm = prompt('Last film?', '')
const filmScore = +prompt('Your score', '')

personalMovieDB.movies[lastFilm] = filmScore

console.log(personalMovieDB)