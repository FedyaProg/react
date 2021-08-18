'use strict';

let numberOfFilms = prompt('Nechta kino ko"rgansiz', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

let a = prompt('Oxirgi ko"rgan filmingiz nomi?', '');
let b = prompt('Filmni baholang?', '');
let c = prompt('Oxirgi ko"rgan filmingiz nomi?', '');
let d = prompt('Filmni baholang?', '');
 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


