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
        // let hitCoordinates = target.id
        let hitResult = hitCoordinates
        console.log('recieving attack')
        // console.log(shipArray)

        for (var i = 0; i < shipArray.length; i++) {
            // console.log('i')
            // console.log(i)

            let shipCoordinates = shipArray[i].coordinates

            for (var j = 0; j < shipCoordinates.length; j++) {

                if (shipCoordinates[j].toString() == hitCoordinates.toString()) {
                    console.log('hit ship before hit')
                    console.log(shipArray[i])
                    hitResult = 'hit';
                    shipArray[i].hit(hitCoordinates);

                    console.log('hit ship after hit')
                    console.log(shipArray[i])
                    // return shipArray[i]

                } 
            }
        }

      return hitResult






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