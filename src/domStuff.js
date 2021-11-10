
import { squareClickIndex, humanGameBoard, computerGameBoard, render } from './index'

import { checkForPastMisses, checkForPastHits } from './gameBoard'


function domThing() {
    console.log('I am a dom function')
}















function squareCick(clickedSquare) {

    let targetValid = computerGameBoard.receiveAttack(clickedSquare.target.id)

    // for (var i = 0; i < computerGameBoard.shipArray.length; i++) {
    //     displayHits(computerGameBoard.shipArray[i])
    // }

    computerGameBoard.checkForLoss()


    if (targetValid) {
        render()
        computerTakesTurn()
    }
}

async function computerTakesTurn() {
    // hideHumanBoard()
    console.log('computer is thinking')
    await pause(1000)
    let poorChoice = true
    let hitCoordinates = '';
    let counter = 0;

    while (poorChoice && counter < 100) {
        let hitX = Math.floor(Math.random() * 10) + 1; 
        let hitY = Math.floor(Math.random() * 10) + 1; 
        hitCoordinates = [hitX, hitY] + 'h';
        // console.log('hitCoordinates: ' + hitCoordinates)

        // console.log('humanGameBoard.checkForPastMisses(hitCoordinates): ' + humanGameBoard.checkForPastMisses(hitCoordinates))

        // console.log('humanGameBoard.checkForPastHits(hitCoordinates): ' + humanGameBoard.checkForPastHits(hitCoordinates))

        if (humanGameBoard.checkForPastMisses(hitCoordinates) == false && humanGameBoard.checkForPastHits(hitCoordinates) == false) {
            poorChoice = false;
        }

         

        counter++
    }
    









    humanGameBoard.receiveAttack(hitCoordinates)
    // console.log(humanGameBoard.shipArray[0].name + ' Damage: ' + humanGameBoard.shipArray[0].damage.length)

    render()

}

function pause(id) {
    return new Promise(resolve => setTimeout(() => {
        // console.log(`pause is over`);
        resolve();
    }, id));
}

















function createGrid() {
    let contentDiv = document.getElementById('content');
    let humanDiv = document.createElement('div');
    humanDiv.id = 'human-content';
    contentDiv.appendChild(humanDiv);
    let computerDiv = document.createElement('div');
    computerDiv.id = 'computer-content';
    contentDiv.appendChild(computerDiv);

    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i + 'h'
            squareDiv.classList.add('square')
            squareDiv.classList.add('human')
            squareDiv.addEventListener('click', squareCick);
            humanDiv.appendChild(squareDiv)
        }
    }

    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i + 'c'
            squareDiv.classList.add('square')
            squareDiv.classList.add('computer')
            squareDiv.addEventListener('click', squareCick);
            computerDiv.appendChild(squareDiv)
        }
    }

    humanGameBoard.shipArray.forEach(displayShip)

    humanGameBoard.shipArray.forEach(displayHits)

    displayMisses(humanGameBoard)


    // computerGameBoard.shipArray.forEach(displayShip)

    computerGameBoard.shipArray.forEach(displayHits)

    displayMisses(computerGameBoard)

}









function removeGrid() {
    parent = document.getElementById('content')
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}



















function displayMisses(thisGameBoard) {

    let shipSquareIdSuffix = ''

    if (thisGameBoard.owner == 'COMPUTER') {
        shipSquareIdSuffix = 'c'
    } else {
        shipSquareIdSuffix = 'h'
    }

    for (var i = 0; i < thisGameBoard.misses.length; i++) {

        let shipSquare = document.getElementById(thisGameBoard.misses[i]);
        shipSquare.classList.add('missed-square')
    }

}

function displayShip(shipToDisplay) {
    let shipSquareIdSuffix = ''

    if (shipToDisplay.owner == 'COMPUTER') {
        shipSquareIdSuffix = 'c'
    } else {
        shipSquareIdSuffix = 'h'
    }

    // console.log('shipSquareIdSuffix: ' + shipSquareIdSuffix)


    for (var i = 0; i < shipToDisplay.coordinates.length; i++) {
        // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[i])
        let shipSquare = document.getElementById(shipToDisplay.coordinates[i] + shipSquareIdSuffix);
        shipSquare.classList.add('ship-square')
    }

}


function displayHits(shipToDisplay) {
    // console.log('shipToDisplay.damage: ' + shipToDisplay.coordinates[1])
    let shipSquareIdSuffix = ''

    if (shipToDisplay.owner == 'COMPUTER') {
        shipSquareIdSuffix = 'c'
    } else {
        shipSquareIdSuffix = 'h'
    }

    console.log('shipToDisplay.damage: ' + shipToDisplay.damage[0])
    for (var i = 0; i < shipToDisplay.damage.length; i++) {
        console.log('shipToDisplay.damage[i]: ' + shipToDisplay.damage[i])

        let shipSquare = document.getElementById(shipToDisplay.damage[i]);
        shipSquare.classList.add('damaged-ship-square')
    }
}

function displayHumanBoard() {
    let board = document.getElementById('human-content');
    board.classList.add('displayed')
    board.classList.remove('hidden')

    board = document.getElementById('computer-content');
    board.classList.add('hidden')
    board.classList.remove('displayed')
}

function hideHumanBoard() {
    // console.log('hideHumanboard called')

    let board = document.getElementById('human-content');
    board.classList.add('hidden')
    board.classList.remove('displayed')
    board = document.getElementById('computer-content');
    board.classList.add('displayed')
    board.classList.remove('hidden')
}

export { domThing, createGrid, displayShip, displayHits as displayHit, squareCick, displayHumanBoard, hideHumanBoard, removeGrid }