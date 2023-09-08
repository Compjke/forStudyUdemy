"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  genre = poster.querySelector(".promo__genre"),
  movieList = document.querySelector(".promo__interactive-list"),
  form = document.querySelector(".add"),
  addInput = form.querySelector(".adding__input"),
  checkBox = form.querySelector('[type="checkbox"]');

document.querySelector(".promo__content").style.width = "100%";
  
  adv.forEach((item) => {
      item.remove();
    });
    
document.querySelector('.promo__adv').remove()

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(addInput.value.length < 5){
        return;
    }
    const newFilm = addInput.value.length > 21 
    ? addInput.value.substring(0,22)+ '...' : addInput.value ;
    const isFavorite = checkBox.checked;
    if(isFavorite) console.log('Favorite')
    movieDB.movies.push(newFilm);
    sortFilms(movieDB.movies)
    // addInput.value = ''
    displayFilmList(movieDB.movies , movieList)
    e.target.reset();
})


genre.textContent = "драма";
poster.style.backgroundImage = 'url("img/bg.jpg")';

const sortFilms = (filmsArr) => {
    filmsArr.sort();
}


function displayFilmList (films , parent) { 
    parent.innerHTML = "";
    sortFilms(films);
    if(movieDB.movies.length < 1){
      parent.innerHTML += `<div>No films</div>`;  
    }
    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
    });
    document.querySelectorAll('.delete')
    .forEach((btn, i) => {
        btn.addEventListener('click' , (e) => {
            movieDB.movies = movieDB.movies.filter((_, index) => index !== i);
            displayFilmList(movieDB.movies, movieList);
        })
    })
}


displayFilmList(movieDB.movies,movieList);