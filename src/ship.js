

function createShip(name, stern, bow) {
    // console.log('ship.js factory function works')


    //turn stern coordinates into two integers
    //turn bow coordinates into two integers



    let shipX1 = stern[0];
    let shipX2 = bow[0];

    // console.log('shipX1')
    // console.log(shipX1)
    // console.log('shipX2')
    // console.log(shipX2)

    let shipY1 = stern[1];
    let shipY2 = bow[1];

    // console.log('shipY1')
    // console.log(shipY1)
    // console.log('shipY2')
    // console.log(shipY2)


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

        // console.log('horizontal ship')
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

console.log(coordinates)

    let damage = [];
    let sunk = false
    function hit(location) {
        // console.log(this.damage)
        this.damage.push(location);

        this.damage.sort(function (a, b) {
            if (a < b)
                return -1;
            return 1;
        });
        // console.log(this.damage)

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

    return {
        name,
        loa,
        damage,
        coordinates,
        hit,
        isSunk
    };


};

export { createShip }