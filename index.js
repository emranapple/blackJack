
// How to make BlackJack Game 

// First take two cards and then let another variable called sum to add two cards.
// Then if else for card 
// display the card and sum 
// add third card and create array and run loop to display all cards 


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.getElementById("message-el")
const cardEl = document.getElementById("card-el")
const sumEl = document.getElementById("sum-el")

let player = {
    name: "Emran", 
    chips: "145"
}

document.getElementById('player-el').textContent = player.name + ": $" + player.chips

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to play the game?"
    } else if (sum === 21) {
        message = "You've got the \"BlackJack\""
        hasBlackJack = true
    } else {
        message = "Game over, please try again"
        isAlive = false
    }

    messageEl.textContent = message

}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}


// Why are isAlive and hasBlackJack used? But assuming that these are used to track 

// Always fixed card, has to be changed into random card

// Another problem is not showing 3rd card in cards display 

// Array might be an option for third, fourth, fifth card...

// but inorder to display third card we have to run loop and display in DOM 

// have to make 13 card 

// make randomNUmber 11 when it is 1, randomNumber 10, when it is less than 11, and for rest randomNumber 
// Sum should be 0 initially 
// isAlive is should be false before start the game 
// also, easily console log shows the cards 

// new card should not be throw when game is over 
// Now understand the isAlive and hasBlackJack cards 
// Name should come from user input and chips from sum or somewhere from game 