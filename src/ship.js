

function createShip(name, loa) {
    // console.log('ship.js factory function works')
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
        console.log(this.damage.length)
        console.log(this.loa)

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
        hit,
        isSunk
    };


};

export { createShip }