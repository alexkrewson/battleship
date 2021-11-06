
// import { createShip } from './ship'
import { createGameBoard, placeShip } from './gameBoard'

import "./style.scss";

// console.log('index.js works')






const firstGameBoard = createGameBoard()
const firstShip = firstGameBoard.placeShip('HMS Cucumber', [1,1], [1,3])
const secondShip = firstGameBoard.placeShip('HMS Potato', [2,1], [3,1])
// console.log('firstShip')
// console.log(firstShip)
// console.log('secondShip')
// console.log(secondShip)

let hitCoordinates = [3,1]
let hitShip = firstGameBoard.receiveAttack(hitCoordinates);
console.log(hitShip)

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }

// console.log('ship damage')
// console.log(secondShip.damage)
// console.log('ship sunk yet?' )
// console.log(secondShip.isSunk())

// hitCoordinates = [1,3]
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(secondShip.damage)
// console.log('ship sunk yet?' )
// console.log(secondShip.isSunk())

// hitCoordinates = '1,3'
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(firstShip.damage)
// console.log('ship sunk yet?' )
// console.log(firstShip.isSunk())

// hitCoordinates = '1,4'
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(firstShip.damage)
// console.log('ship sunk yet?' )
// console.log(firstShip.isSunk())// const hitMessage = firstShip.hit(true)


// hitCoordinates = '1,5'
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(firstShip.damage)
// console.log('ship sunk yet?' )
// console.log(firstShip.isSunk())// const hitMessage = firstShip.hit(true)

