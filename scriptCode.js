/*<<<<<<< debugging
const breakfastDiv = document.getElementById("breakfast")
breakfastDiv.addEventListener('click', () => breakfastClicked())

const LunchDiv = document.getElementById("lunch")
LunchDiv.addEventListener('click', () => lunchClicked())

function breakfastClicked(){
    const breakfastDiv = document.getElementById("breakfastFoods")
    breakfastDiv.style.display = 'flex'
    const lunchDiv = document.getElementById("lunchFoods")
    lunchDiv.style.display = 'none'
}

function lunchClicked(){
    const breakfastDiv = document.getElementById("breakfastFoods")
    breakfastDiv.style.display = 'none'
    const lunchDiv = document.getElementById("lunchFoods")
    lunchDiv.style.display = 'flex'
}*/

/* console.log('hello') // similar to print for python

const myConstVar = 5 // constants can't be changed afterward, if you try, they will create an error 

// variable
let foo = 93 
console.log(foo)

foo = "hello"
console.log(foo)

// instentiate the array with []
let foodArray = ["pizza", "pasta", "salad"]
console.log(foodArray)

//second index is 1 as js starts index at 0 (just as Gh)
console.log(foodArray[1])
let foodItem = foodArray[1]
console.log("foodItem:", foodItem)



//object is {}
let objectVariable = {
    key:'value',
    food: foodArray
}
console.log(objectVariable)

let foods = objectVariable['foods']
console.log('foods', foods)



//defining function
function AddTwoNumbers(num1, num2) {
    let sum = num1 + num2
    return sum
}

let mySum = AddTwoNumbers(6,10)
console.log('mySum:', mySum) */


//access html document
let breakfastElement = document.getElementById("breakfast")
//console.log(breakfastElement)


//creating the function going to the addEventListener 
function breakfastClicked(){
    console.log("breakfast element was clicked")
    let breakfastFoodsDiv = document.getElementById("breakfastFoods")
    breakfastFoodsDiv.style.display = 'flex'
    let lunchFoodsDiv = document.getElementById("lunchFoods")
    lunchFoodsDiv.style.display = 'none'
}

//event listener which listen to any interaction with the element
breakfastElement.addEventListener("click", () => breakfastClicked())


function lunchClicked(){
    console.log("lunch was clicked")
    let breakfastFoodsDiv = document.getElementById("breakfastFoods")
    breakfastFoodsDiv.style.display = 'none'
    let lunchFoodsDiv = document.getElementById("lunchFoods")
    lunchFoodsDiv.style.display = 'flex'
}

let lunchElement = document.getElementById("lunch")
lunchElement.addEventListener("click", () => lunchClicked())
