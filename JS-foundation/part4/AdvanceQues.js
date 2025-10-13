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

/*
5. Use a `for-in` loop to loop through an object containing city populations.
Stop the loop when the population of `"Berlin" is found and store all previous cities' populations in a new object named `cityPopulations`.
let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};
*/

let citiesPopulation = {"London": 8900000,"New York": 8400000,"Paris": 2200000,"Berlin": 3500000}
citypop = {}
for (const city in citiesPopulation) {
    if (city === "Berlin") {
        break
    }
    citypop[city] = citiesPopulation[city] // Creating new key value pair

    
}
console.log(citypop)

/*
6. Use a `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
*/

let worldCities = {"Sydney": 5000000,"Tokyo": 9000000,"Berlin": 3500000,"Paris": 2200000};
let NewCitypop = {}
for (const NewCity in worldCities) {
    if (worldCities[NewCity] < 3000000) {
        continue
    }
     NewCitypop[NewCity] = worldCities[NewCity]

}
console.log(NewCitypop)

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. Stop the loop when `"chai" is found, and store all
previous tea types in an array named `availableTeas`.
*/

let teacollection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teacollection.forEach(function (tea) {
    if(tea === "chai") {
        return;
    }
    availableTeas.push(tea)
        
})
console.log(availableTeas)

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
Skip "Sydney" and store the other cities in a new array named `traveledCities`.
*/

let MyCities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let TravelledCities = []

MyCities.forEach(c => {
    if (c === "Sydney") {
        return
    }
    TravelledCities.push(c)
});
console.log(TravelledCities)

/*
9. Write a `for` loop that iterates through the array [2, 5, 7, 9]`.
Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let no = [2,5,7,9]
let MultipliedNo = []

for (let x = 0; x < no.length; x++) {
    if (no[x] === 7) {
        continue
    }   
    MultipliedNo.push(no[x]*2)
}
console.log(MultipliedNo)

/*
10. Use a for-of` loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/


myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
shortTeas = []
for (const t of myTeas) {
    if (t.length > 10) {
        break
    }
    shortTeas.push(t)
}
console.log(shortTeas)