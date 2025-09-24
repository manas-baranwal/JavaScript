 // to add numbers from 1 - 5

 let sum = 0
 let i = 1
 while (i<=5) {
    sum+=i
    i++
 }
 console.log(sum);
 
// to sotre value from 5 - 1 in an array

countdown = []
let j = 5
while (j>0) {
    countdown.push(j)
    j--
}
console.log(countdown)

// to store values in an array until user stops (do while)

//  let TeaCollection = []
//  let Tea 

//  do {
//     Tea = prompt("Enter your tea name(type 'stop' to end the code)")
//     if (Tea !== "stop") {
//       TeaCollection.push(Tea)
//     }
//  } while (Tea !== 'stop');

// to add numbers from 1-3 and store it in a variable

 let total = 0
 let k = 1
 do {
   total += k
   k++
 } while (k<=3);

// to mupltiply each element by 2 in a given array [2,4,6]

let MupltipliedNumbers = []
let Numbers = [2,4,6]
for (let l=0; l<Numbers.length; l++) {
   TakeNumber = Numbers[l] * 2
   MupltipliedNumbers.push(TakeNumber)   
}

// 
