"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How more films do you sees? ");
	while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt("How more films do you sees? ");
	}
}

start();

let personalMovie = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	generes:[],
	privat: false
};

function rememberMyFilms(){
	for(let i = 0; i<2; i++){
		let nameMovies = prompt("yor last movie: ");
		if(nameMovies != null && nameMovies != "" && nameMovies.length <50){
			let gradeMovie = prompt("how many star do you give? ");
			if(gradeMovie != null && gradeMovie != "" && gradeMovie.length < 50){
				personalMovie.movies[nameMovies] = gradeMovie;
			}else{
				i--;
			}
		}else{
			i--;
		}
	}

	// let i = 0;
	// do {
		
	// 	let nameMovies = prompt("yor last movie: ");
	// 	if(nameMovies != null && nameMovies != "" && nameMovies.length <50){
	// 		let gradeMovie = prompt("how many star do you give? ");
	// 		if(gradeMovie != null && gradeMovie != "" && gradeMovie.length < 50){
	// 			personalMovie.movies[nameMovies] = gradeMovie;
	// 			i++;
	// 		}else{
	// 			alert("Invalid input. Please try again.");
	// 		}
	// 	}else{
	// 		alert("Invalid input. Please try again.");
	// 	}
	// }while(i<2);
	
	
	// let i = 0;
	// while(i<2){
	// 	let nameMovies = prompt("yor last movie: ");
	// 	if(nameMovies != null && nameMovies != "" && nameMovies.length <50){
	// 		let gradeMovie = prompt("how many star do you give? ");
	// 		if(gradeMovie != null && gradeMovie != "" && gradeMovie.length < 50){
	// 			personalMovie.movies[nameMovies] = gradeMovie;
	// 			i++;
	// 		}else{
	// 			alert("Invalid input. Please try again.");
	// 		}
	// 	}else{
	// 		alert("Invalid input. Please try again.");
	// 	}
	// }
}
// rememberMyFilms();

function detectPersonalLevl(){
	if(personalMovie.count < 10){
		console.log("You need watch more film");
	}else if (personalMovie.count >=10 && personalMovie.count <= 30){
		console.log("You are classical watcher");
	}else if(personalMovie.count >30){
		console.log("You are filmoman");
	}else{
		console.log("Error");
	}
}
// detectPersonalLevl();

function showMtDB(hidden){
	if (!hidden){
		console.log(personalMovie);
	}
}
showMtDB(personalMovie.privat);

function writeYourGenres (){
	for(let i = 0; i<3;i++){
		let youtLikeGanres = prompt(`Your love ganres №${i+1}?`);
		personalMovie.generes.push(youtLikeGanres);

	}
}
writeYourGenres();