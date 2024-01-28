
// How to make BlackJack Game 

// First take two cards and then let another variable called sum to add two cards.
// Then if else for card 
// display the card and sum 
// add third card and create array and run loop to display all cards 
// 

let firstCard = 20
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
const messageEl = document.getElementById("message-el")
const cardEl = document.getElementById("card-el")
const sumEl = document.getElementById("sum-el")

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


function startGame() {
    renderGame()
}

function newCard() {
    let card = 6
    sum += card
    cards.push(card)
    renderGame()
}


// Why are isAlive and hasBlackJack used? But assuming that these are used to track 

// Always fixed card, has to be changed into random card

// Another problem is not showing 3rd card in cards display 

// Array might be an option for third, fourth, fifth card...

// but inorder to display third card we have to run loop and display in DOM 



