/*
1. Write a function named 'makeTea` that takes one parameter, `type0fTea`, and returns a string like "Making green tea" when called with "green tea"`. Store the result in a variable named `teaorder`,
*/

function makeTea(type0fTea){
    return `Making ${type0fTea}`
}
let teaorder = makeTea("lemon tea")
console.log(teaorder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teatype){
    function confirmOrder(){
        return `order confirmed for ${teatype}`
    }
    return confirmOrder()
}
let orderconfirmation = orderTea('oolong tea')
console.log(orderconfirmation)


/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
    return price*quantity;
}
let totalCost = calculateTotal(499 , 100);
console.log(totalCost)


/*
4. Write a function named `processTeaOrder` that takesanother function, `makeTea`, as a parameter and calls itwith the argument "earl grey".Return the result of calling `makeTea`.
*/

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);