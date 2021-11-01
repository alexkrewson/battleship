
import { createShip } from './ship'
import { createGameBoard } from './gameBoard'

import "./style.scss";

console.log('index.js works')




const firstShip = createShip('HMS Cucumber', 5);
const secondShip = createShip('HMS Potato', 5);
// console.log(secondShip)

const firstGameBoard = createGameBoard(firstShip, secondShip)

let hitCoordinates = '1,1'
let hitShip = firstGameBoard.receiveAttack(hitCoordinates);

if (hitShip != 'miss') {
    hitShip.hit(hitCoordinates)
}
// console.log(firstShip.isSunk())

hitCoordinates = '1,2'
hitShip = firstGameBoard.receiveAttack(hitCoordinates);

if (hitShip != 'miss') {
    hitShip.hit(hitCoordinates)
}
// console.log(firstShip.isSunk())

hitCoordinates = '1,3'
hitShip = firstGameBoard.receiveAttack(hitCoordinates);

if (hitShip != 'miss') {
    hitShip.hit(hitCoordinates)
}
console.log(firstShip.isSunk())

hitCoordinates = '1,4'
hitShip = firstGameBoard.receiveAttack(hitCoordinates);

if (hitShip != 'miss') {
    hitShip.hit(hitCoordinates)
}
console.log(firstShip.isSunk())
// const hitMessage = firstShip.hit(true)

// function testThis(value) {
//     return value * 2
// }

// module.exports = testThis;