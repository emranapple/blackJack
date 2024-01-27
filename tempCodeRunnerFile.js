let firstCard = 2
let secondCard = 10
let sum = firstCard + secondCard

if(sum < 21) {
    console.log("Do you want to play the game?")
} else if( sum === 21) {
    console.log("You've got the \"BlackJack\"")
} else {
    console.log("Game over, please try again")
}