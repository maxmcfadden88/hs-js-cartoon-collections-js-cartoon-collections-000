function dwarfRollCall(dwarves) {
let dwarfString = '';
for (var i = 0; i < dwarves.length; i++) {
dwarfString += (i+1).toString()+ ". " + dwarves[i] + ' ';
}
return dwarfString;
}

function summonCaptainPlanet(fruits){
var newFruits = [];
for (var i = 0; i < fruits.length; i++) {
newFruits.push(fruits[i].toUpperCase() + "!");
}
return newFruits;
}

function longPlaneteerCalls(element) {
for(let i = 0; i < element.length; i++){
if(element[i].length>4){
return true}
}
return false;
}

 
function findTheCheese (foods) { // <-- [ "grapes", "gouda", "cheddar" ]
var cheeses = ["cheeddar", "gouda", "camembert"];

for (var i = 0; i < foods.length; i++) {

for (var c = 0; c < cheeses.length; c++) {

if (cheeses[c] === foods[i])
return foods[i];
}
return 'no cheese!';
}}

function wordsWithB (words) { // <- [ "eggs", "boat", "bannana", "oyster"] -> [ "boat", "bananna" ]
  var bwords = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith('b'))
      bwords.push(words[i])
  }
}
