
import { squareClickIndex, humanGameBoard, computerGameBoard, render } from './index'

import { checkForPastMisses, checkForPastHits, placeShip } from './gameBoard'


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

        if (humanGameBoard.checkForPastMisses(hitCoordinates) == false && humanGameBoard.checkForPastHits(hitCoordinates) == false) {
            poorChoice = false;
        }



        counter++
    }

    humanGameBoard.receiveAttack(hitCoordinates)

    render()

}

function pause(id) {
    return new Promise(resolve => setTimeout(() => {
        // console.log(`pause is over`);
        resolve();
    }, id));
}



function renderPartialBuild() {

    removeGrid()
    createShipBuildingGrid()

}

let partialShip = [];

function squareBuildShip(clickedSquare) {
    let builtSquareId = clickedSquare.target.id;
    console.log('builtSquare: ' + builtSquareId)
    let buildShipId = builtSquareId.slice(0, builtSquareId.length - 1)
    console.log('buildShipId: ' + buildShipId)
    // let squareDiv = document.getElementById(builtSquareId)
    partialShip.push(buildShipId);

    let partialSquare = document.getElementById(builtSquareId)
    partialSquare.classList.add('partial-ship')





}


function saveShip() {
    console.log('partialShip[0]: ' + partialShip[0])
    console.log('partialShip[1]: ' + partialShip[1])
    let nameInputElement = document.getElementById('name-input')
    let shipName = nameInputElement.value

    const humanShip = humanGameBoard.placeShip(shipName, partialShip[0], partialShip[1]);
    console.log(humanShip)
    partialShip = [];
    removeGrid()
    createShipBuildingGrid()
    humanGameBoard.shipArray.forEach(displayShip)

}

function saveAllShips() {

}




function createShipBuildingGrid() {
    let contentDiv = document.getElementById('content');
    let humanDiv = document.createElement('div');
    humanDiv.id = 'human-content';
    contentDiv.appendChild(humanDiv);


    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i + 'h'
            squareDiv.classList.add('square')
            squareDiv.addEventListener('click', squareBuildShip);
            humanDiv.appendChild(squareDiv)
        }
    }

    let btn = document.createElement('button');
    btn.addEventListener('click', saveShip)
    let nameInput = document.createElement('input')
    nameInput.id = 'name-input'
    let btn2 = document.createElement('button');
    btn2.addEventListener('click', render)

    // let contentDiv = document.getElementById('content')
    contentDiv.appendChild(btn)
    contentDiv.appendChild(nameInput)
    contentDiv.appendChild(btn2)


    // humanGameBoard.shipArray.forEach(displayShip)





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
        console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[i])


        let shipSquare = document.getElementById(shipToDisplay.coordinates[i] + shipSquareIdSuffix);
        if (!shipSquare) {
            let shipSquare = document.getElementById(shipToDisplay.coordinates[i]);
        }
        // shipSquare = document.getElementById(shipToDisplay.coordinates[i]);
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

export { domThing, createGrid, displayShip, displayHits as displayHit, squareCick, displayHumanBoard, hideHumanBoard, removeGrid, createShipBuildingGrid }