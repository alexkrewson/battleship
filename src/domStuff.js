
import { squareClickIndex, activeGameBoard } from './index'


function domThing() {
    console.log('I am a dom function')

}

function squareCick(clickedSquare) {
    console.log('I am a square click ' + clickedSquare.target.id)
    activeGameBoard.receiveAttack(clickedSquare.target.id);


    if (activeGameBoard.receiveAttack(clickedSquare.target.id) != 'hit') {
        displayMiss(clickedSquare.target.id)
    }
    
    for (var i = 0; i < activeGameBoard.shipArray.length; i++) {
        // displayShip(activeGameBoard.shipArray[i])
        displayHit(activeGameBoard.shipArray[i])

    }


}

function createGrid() {
    let contentDiv = document.getElementById('content');

    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i
            squareDiv.classList.add('square')
            squareDiv.addEventListener('click', squareCick);
            contentDiv.appendChild(squareDiv)
        }
    }
}

function displayMiss(missedId) {
    let missedSquare = document.getElementById(missedId);
    missedSquare.classList.add('missed')
}

function displayShip(shipToDisplay) {
    // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[1])

    for (var i = 0; i < shipToDisplay.coordinates.length; i++) {
        // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[i])
        let shipSquare = document.getElementById(shipToDisplay.coordinates[i]);
        shipSquare.classList.add('ship-square')
    }

}


function displayHit(shipToDisplay) {
    // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[1])
    if (shipToDisplay.damage.length > 0) {
        console.log('yup, there is damage')
        for (var i = 0; i < shipToDisplay.damage.length; i++) {
            let shipSquare = document.getElementById(shipToDisplay.damage[i]);
            shipSquare.classList.add('damaged-ship-square')
        }

    }


}


export { domThing, createGrid, displayShip, displayHit, squareCick }