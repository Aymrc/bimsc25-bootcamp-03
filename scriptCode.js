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
}