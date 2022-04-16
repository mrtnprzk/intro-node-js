// //extension1 - copy
// const fs = require("fs");

// //copy created file file1 and create new file file2 with same text inside
// fs.copyFileSync("file1.txt", "file2.txt");



//extension2 - superheroes
const superheroes = require('superheroes');
 
const allHeroes = superheroes.all;
// console.log(allHeroes)
 
const mySuperheroName = superheroes.random();
// console.log("Superhero Name: ", mySuperheroName)



//extension3 - super
const supervillains = require('supervillains');
 
const allVillains = supervillains.all;
// console.log(allVillains)
 
const myVillainName = supervillains.random();
console.log("Villains Name: ", myVillainName)