

function createShip(name, stern, bow, owner) {
    console.log('ship.js factory function works')


console.log('stern.split(',')[0]: ' + stern.split(',')[0])
    let shipX1 = Number(stern.split(',')[0]);
    let shipX2 = Number(bow.split(',')[0]);

    let shipY1 = Number(stern.split(',')[1]);
    let shipY2 = Number(bow.split(',')[1]);
    let tempValue = 0

    if (shipX1 > shipX2) {
        tempValue = shipX2
        shipX2 = shipX1;
        shipX1 = tempValue
    }

    if (shipY1 > shipY2) {
        tempValue = shipY2
        shipY2 = shipY1;
        shipY1 = tempValue
    }

    console.log('shipX1: ' + shipX1)
    console.log('shipX2: ' + shipX2)
    console.log('shipY1: ' + shipY1)
    console.log('shipY2: ' + shipY2)

    let loa = 0;

    let coordinates = []
  

    if (shipX1 == shipX2) {
        console.log('vertical ship')
        // vertical ship
        loa = shipY2 - shipY1 + 1
        for (var i = 0; i < loa; i++) {


            coordinates[i] = [shipX1, shipY1 + i]
            // console.log('coordinates')
            // console.log(i)
            // console.log(coordinates[i])
        }
        // console.log('coordinates')
        // console.log(coordinates)
    } else {
        // horizontal ship
        console.log('horizontal ship')

        loa = shipX2 - shipX1 + 1
        for (var i = 0; i < loa; i++) {
            coordinates[i] = [shipX1 + i, shipY1]
            // coordinates[i] = 'boobs'

            // console.log('coordinates')
            // console.log(i)
            // console.log(coordinates[i])
        }
        // console.log('coordinates')
        // console.log(coordinates)

    }

// console.log(coordinates)

    let damage = [];
    let sunk = false

    function hit(location) {
        console.log(this.name + ' getting hit')
        this.damage.push(location);

        this.damage.sort(function (a, b) {
            if (a < b)
                return -1;
            return 1;
        });
        console.log(this.name + ' damage ' + this.damage)

        return this.damage
    };

    function isSunk() {
        // console.log('ship.js damage')
        // console.log(this.damage.length)
        // console.log('ship.js loa')
        // console.log(this.loa)

        if (this.damage.length == this.loa) {
            return true;
        } else {
            return false;
        }
    }

    console.log('stern: ' + stern)

    console.log('bow: ' + bow)

    return {
        name,
        loa,
        damage,
        coordinates,
        owner,
        hit,
        isSunk
    };


};

export { createShip }