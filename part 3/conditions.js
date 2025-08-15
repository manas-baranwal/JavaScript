// To check if a number is greater than another number

let num1 = 5
let num2 = 10
if (num1 > num2) {
    console.log("num1 is greater");
} 
else {
    console.log("num2 is greater")
}

let num3 = 10
let num4 = 8
if (num3 > num4) {
    console.log("num3 is greater");
} 
else {
    console.log("num4 is greater")
}

// To check if a string is equal to another string 

let username1 = 'chai'
let username2 = 'chai'
if (username1 == username2) {
    console.log('they are same')
} 
else {
    console.log('they are not same')
}

let username3 = 'chai1'
let username4 = 'chai'
if (username3 == username4) {
    console.log('they are same')
} 
else {
    console.log('they are not same')
}

// To check if a variable is a number or not 

let score = 43
if (typeof score === 'number'){
    console.log('it is a number')
}
else{
    console.log('it is not a number')
}

let score1 = 'hey'
if (typeof score1 === 'number'){
    console.log('it is a number')
}
else{
    console.log('it is not a number')
}

// To check if a boolean value is a True or False 

isTeaReady = false
if (isTeaReady) {
    console.log('Tea is ready')
}
else{
    console.log('Tea is not ready')
}

isCoffeeReady = true
if (isCoffeeReady) {
    console.log('coffe is ready')
}
else{
    console.log('coffe is not ready')
}

// To check if an array is empty of not

let item = []
if (item.length === 0) {
    console.log('array is empty')
}
else{
    console.log('array is not empty')
}