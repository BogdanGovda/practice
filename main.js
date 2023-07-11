"use strict";
let numberOfFilms = prompt("How more films do you sees? ");
let personalMovie = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	generes:[],
	privat: false
};

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

if(personalMovie.count < 10){
	console.log("You need watch more film");
}else if (personalMovie.count >=10 && personalMovie.count <= 30){
	console.log("You are classical watcher");
}else if(personalMovie.count >30){
	console.log("You are filmoman");
}else{
	console.log("Error");
}

console.log(personalMovie);


