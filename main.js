"use strict";
let numberOfFilms = prompt("How more films do you sees? ");
let personalMovie = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	generes:[],
	privat: false
};
let nameMovies = prompt("your last movie: ");
let gradeMovie = prompt("how many star do you give? ");
personalMovie.movies[nameMovies] = gradeMovie;
console.log(personalMovie);