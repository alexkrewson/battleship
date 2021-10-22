

function createShip(name, loa, damage, sunk) {
    console.log('ship.js factory function works')

    function hit(location) {

        this.damage.push(location);

        this.damage.sort(function (a, b) {
            if (a < b)
                return -1;
            return 1;
        });
        console.log(this.damage)

        return this.damage
    };

    function isSunk() {
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
        sunk,
        hit,
        isSunk
    };


};

export { createShip }