let firstCard = 20
let secondCard = 1
let sum = firstCard + secondCard
let hasBlackJack = false 

if(sum < 21) {
    console.log("Do you want to play the game?")
} else if( sum === 21) {
    console.log("You've got the \"BlackJack\"")
    hasBlackJack = true 
} else {
    console.log("Game over, please try again")
}

console.log(hasBlackJack)