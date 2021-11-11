import { createShip } from './ship'

import { squareCick } from './domStuff'


function createPlayer(name) {
    // console.log('createPlayer called')
    return {
        name: name
    }
};


function createGameBoard(name) {
    let shipArray = [];
    let misses = [];
    let hits = [];



    function placeShip(name, stern, bow) {
        let owner = this.owner;
        const newShip = createShip(name, stern, bow, owner);
        shipArray.push(newShip)
        return newShip

    }


    function receiveAttack(hitCoordinates) {
        // console.log('receiveAttack this: ' + this)
        let board = this;
        // let pastMiss = checkForPastMisses(board, hitCoordinates)
        // let pastHit = checkForPastHits(board, hitCoordinates)
        let hitResult = 'not hit'

        let pastMiss = this.checkForPastMisses(hitCoordinates)
        let pastHit = this.checkForPastHits(hitCoordinates)
        let wrongBoard = this.checkForWrongBoard(hitCoordinates)
        // console.log('pastMiss: ' + pastMiss)

        // console.log('pastHit: ' + pastHit)

        // console.log('hitCoordinates: ' + hitCoordinates)



        if (pastHit || pastMiss || wrongBoard) {
            console.log('invalid torpedo target')
            hitResult = false
        } else {

            console.log(this.owner + ' is being attacked at ' + hitCoordinates)



            // iterating through ship array 
            for (var i = 0; i < shipArray.length; i++) {


                let coordinatesSuffix = ''

                if (this.owner == 'COMPUTER') {
                    coordinatesSuffix = 'c'
                } else {
                    coordinatesSuffix = 'h'
                }
                let shipCoordinates = shipArray[i].coordinates;
                // console.log('shipCoordinates: ' + shipCoordinates)
                // console.log('hitCoordinates: ' + hitCoordinates)


                // iterating through ship coordinates 
                for (var j = 0; j < shipCoordinates.length; j++) {

                    let shipCoordinatesComplete = shipCoordinates[j] + coordinatesSuffix
                    // console.log('shipCoordinatesComplete: ' + shipCoordinatesComplete)

                    if (shipCoordinatesComplete.toString() == hitCoordinates.toString()) {

                        hitResult = 'hit';
                        shipArray[i].hit(hitCoordinates);
                        hits.push(hitCoordinates);
                    }
                }
            }

            if (hitResult == 'not hit') {
                misses.push(hitCoordinates)
            }

        }

        return hitResult
    };

    function checkForWrongBoard(theseHitCoordinates) {

        let arr = theseHitCoordinates.toString().split('');
        let hitBoardSuffix = theseHitCoordinates.slice(-1);
        let shipSquareIdSuffix = ''

        console.log("hitBoardSuffix: " + hitBoardSuffix)

        if (this.owner == 'COMPUTER') {
            shipSquareIdSuffix = 'c'
        } else {
            shipSquareIdSuffix = 'h'
        }



        if (hitBoardSuffix == shipSquareIdSuffix) {
            return false;
        } else {
            console.log('Friendly fire!!!')
            return true;
        };
    }

    function checkForPastMisses(theseHitCoordinates) {
        // console.log('checking for past misses')
        // console.log('this.owner: ' + this.owner)
        // console.log('this.misses: ' + this.misses)
        // console.log('theseHitCoordinates: ' + theseHitCoordinates)


        if (this.misses.toString().includes(theseHitCoordinates.toString())) {
            return true;
        } else {
            return false;
        };
    };

    function checkForPastHits(theseHitCoordinates) {
        // console.log('checking for past Hits')
        // console.log('this.owner: ' + this.owner)
        // console.log('this.hits: ' + this.hits)
        // console.log('theseHitCoordinates: ' + theseHitCoordinates)



        if (this.hits.toString().includes(theseHitCoordinates.toString())) {
            return true;
        } else {
            return false;
        };
    };


    function checkForLoss(name, stern, bow) {
        let sunkShips = 0;
        for (var i = 0; i < shipArray.length; i++) {
            if (shipArray[i].loa == shipArray[i].damage.length) {
                sunkShips++
            }
        }
        // console.log('sunkShips: ' + sunkShips)

        if (sunkShips == shipArray.length) {
            console.log('all is lost')

        }
    }

    const existence = 'exists';
    const owner = name;
    // const turn =  true;


    return {
        receiveAttack,
        placeShip,
        checkForLoss,
        checkForPastMisses,
        checkForPastHits,
        checkForWrongBoard,
        shipArray,
        existence,
        // turn,
        owner,
        misses,
        hits
    };


};


export { createGameBoard, createPlayer }