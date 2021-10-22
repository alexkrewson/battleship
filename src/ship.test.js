// const hit = require('./ship');
// const createShip = require('./ship');
import { hit, createShip } from './ship'
const testShip = createShip('HMS testShip', 4, [3], false);



test('ship takes a second hit', () => {
    expect(testShip.hit(0)).toStrictEqual([0, 3]);
});

test('ship takes a third hit', () => {
    expect(testShip.hit(1)).toStrictEqual([0, 1, 3]);
});

test('ship takes fourth hit', () => {
    expect(testShip.hit(2)).toStrictEqual([0, 1, 2, 3]);
});

test('ship is sunk', () => {
    expect(testShip.isSunk()).toBe(true);
});