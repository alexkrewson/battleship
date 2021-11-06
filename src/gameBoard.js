import { createShip } from './ship'


function createGameBoard() {
    // console.log('game.js factory function works')
    const shipArray = [];


    function placeShip(name, stern, bow) {
        // console.log('placeShip is called')
        const newShip = createShip(name, stern, bow);
        // console.log(newShip)
        shipArray.push(newShip)
        return newShip

    }


    function receiveAttack(hitCoordinates) {

        let hit = false

        for (var i = 0; i < shipArray.length; i++) {
            // console.log('i')
            // console.log(i)

            // console.log('shipArray')
            // console.log(shipArray)
            let shipCoordinates = shipArray[i].coordinates

            for (var j = 0; j < shipCoordinates.length; j++) {

                if (shipCoordinates[j].toString() == hitCoordinates.toString()) {

                    console.log('hit')
                    hit = shipArray[i]
                    // return shipArray[i]

                }
            }
        }

      return hit






        // // console.log(ship1)
        // // console.log(ship2)




    };

    const existence = 'exists';


    return {
        receiveAttack,
        placeShip,
        shipArray,
        existence
    };


};


export { createGameBoard }