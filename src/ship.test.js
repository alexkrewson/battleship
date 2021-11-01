
import { hit, createShip } from './ship'
const testShip = createShip('HMS testShip', 5);



test('ship takes a second hit', () => {
    expect(testShip.hit('1,1')).toStrictEqual(['1,1']);
});

test('ship takes a third hit', () => {
    expect(testShip.hit('1,2')).toStrictEqual(['1,1','1,2']);
});

test('ship takes fourth hit', () => {
    expect(testShip.hit('1,3')).toStrictEqual(['1,1','1,2','1,3']);
});

test('ship takes fourth hit', () => {
    expect(testShip.hit('1,4')).toStrictEqual(['1,1','1,2','1,3','1,4']);
});

test('ship is sunk', () => {
    expect(testShip.isSunk()).toBe(false);
});

test('ship takes fifth hit', () => {
    expect(testShip.hit('1,5')).toStrictEqual(['1,1','1,2','1,3','1,4','1,5']);
});

test('ship is sunk', () => {
    expect(testShip.isSunk()).toBe(true);
});