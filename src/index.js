import { createGameBoard, createPlayer, placeShip } from './gameBoard'
import { domThing, createGrid, displayShip, displayHit, displayHumanBoard, hideHumanBoard, removeGrid } from './domStuff'
import "./style.scss";
let activeGameBoard = {};
let humanGameBoard = {};
let computerGameBoard = {};


function playerSetup() {
    const newPlayer = createPlayer('Tilly');
    humanGameBoard = createGameBoard(newPlayer.name);
    const humanShip1 = humanGameBoard.placeShip('HMS Cucumber', [1, 1], [1, 3]);
    const humanShip2 = humanGameBoard.placeShip('HMS Potato', [4, 4], [7, 4]);

}



function AISetup() {
    const newPlayer = createPlayer('COMPUTER');
    computerGameBoard = createGameBoard(newPlayer.name);
    const computerShip1 = computerGameBoard.placeShip('HMS Transistor', [1, 1], [1, 4]);
    const computerShip12 = computerGameBoard.placeShip('HMS Electron', [4, 2], [7, 2]);
}

function gameStart() {

    // request player setup
    playerSetup()

    // AI setup
    AISetup()

    // board setup
    render()
}


function render() {
    removeGrid()
    createGrid()



}

gameStart()


// activeGameBoard = humanGameBoard;



export { humanGameBoard, computerGameBoard, render }
