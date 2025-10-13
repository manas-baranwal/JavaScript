//Number

let num1 = 120
console.log(typeof num1);

let num2 = new Number(120)
console.log(num2)
console.log(typeof num2)
console.log(num2.valueOf())

// null and undefined 

let firstname = null
let middlename
let lastname = undefined

console.log(firstname)
console.log(middlename)
console.log(lastname)

//strings

let username = 'Manas'

let Greet = 'Hello' + username
console.log(Greet) // no space in b/w

let NewGreet = `Hello ${username}`
console.log(NewGreet) // space in b/w

//symbols

let sm1 = Symbol('Manas')
let sm2 = Symbol('Manas')

console.log(sm1==sm2) // false because symbols always holdss unique value