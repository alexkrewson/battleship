import { index2Check } from './index2'
import { createShip } from './ship'

const sum = require('./sum');
import "./style.scss";

console.log('index.js works')

index2Check()


const firstShip = createShip('HMS Cucumber', 4, false, false);
console.log(firstShip)

// const hitMessage = firstShip.hit(true)

// function testThis(value) {
//     return value * 2
// }

// module.exports = testThis;