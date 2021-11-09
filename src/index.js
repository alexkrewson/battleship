import { createGameBoard, placeShip } from './gameBoard'
import { domThing, createGrid, displayShip, displayHit } from './domStuff'
import "./style.scss";
let activeGameBoard = []


createGrid()
const firstGameBoard = createGameBoard()
const firstShip = firstGameBoard.placeShip('HMS Cucumber', [1, 1], [1, 3])
const secondShip = firstGameBoard.placeShip('HMS Potato', [4, 4], [7, 4])

activeGameBoard = firstGameBoard
console.log('firstShip')
console.log(firstShip)
console.log('secondShip')
console.log(secondShip)




// displayShip(firstShip)
// displayShip(secondShip)
// displayHit(firstShip)
// displayHit(secondShip)


// console.log('firstShip.damage before attack')
// console.log(firstShip.damage)



// let hitCoordinates = [4,1]
// let hitShip = firstGameBoard.receiveAttack(hitCoordinates);
// console.log('hit result: ' + hitShip)




// console.log('firstShip.damage after attack')
// console.log(firstShip.damage)

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


export { activeGameBoard }
