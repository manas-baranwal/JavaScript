// to create an array and access the first element and store it in a variable

let TeaFlavours = ['green tea', 'black tea', 'oolong tea']
const FirstFlavour = TeaFlavours[0]
console.log(FirstFlavour);

// to change an element in a array

let TeaTypes = ["herbal tea", "white tea", "masala tea"]
TeaTypes[1] = 'jasmine tea'
console.log(TeaTypes)

// to add an element in an array using PUSH method

let CitiesVisited = ['Mumbai', 'Sydney']
CitiesVisited[2] = 'Berlin'
CitiesVisited.push('Delhi')
console.log(CitiesVisited)

// to remove an element using pop and store that element in a variable

let TeaOrders = ['chai', 'iced tea', 'matcha', 'earl grey']
let lastOrder = TeaOrders.pop(3)
console.log(lastOrder)
console.log(TeaOrders)

// to create a hardcopy of an array

let TopCities = ['Berlin','Singapore','Mumbai']
let hardcopy = [...TopCities]
TopCities.pop()
console.log(hardcopy)
console.log(TopCities)

// merging 2 arrays

let EuropeCities = ['Paris','Rome']
let AsianCities = ['TOkyo','Bangkok']
let WorldCities = EuropeCities.concat(AsianCities)
console.log(WorldCities) 

// to check if an element exists in an array

let CityBucketList = ['Tokyo','London','Cape Town','Vancouver']
let isLondonInList = CityBucketList.includes('London')
console.log(isLondonInList)