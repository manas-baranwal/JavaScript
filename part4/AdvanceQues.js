/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let Teas = ['green tea','black tea','chai','oolong tea']
let SelectedTeas = []
for (let i = 0; i < Teas.length; i++) {
    if (Teas[i] === "chai") {
        break;
    }
    SelectedTeas.push(Teas[i])
}
console.log(SelectedTeas);


/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
Store the other cities in a new array named `visitedCities`.
*/

Cities = ["London", "New York", "Paris", "Berlin"]
VisitedCities = []

for (let j = 0; j < Cities.length; j++) {
    if (Cities[j] === "Paris") {
        continue
    }
    VisitedCities.push(Cities[j])
}
console.log(VisitedCities)

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
    if (num === 4){
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
Store the other teas in an array named `preferredTeas`.
*/

let differentTea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(const Tea of differentTea){
    if (Tea == "herbal tea"){
        continue;
    }
    preferredTeas.push(Tea);
}
console.log(preferredTeas);
