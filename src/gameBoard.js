function createGameBoard(ship1, ship2) {
    // console.log('game.js factory function works')

    

    function receiveAttack(coordinates) {

        // takes a pair of coordinates, determines whether or not the attack hit a ship and 
        // then sends the ‘hit’ function to the correct ship, or records the coordinates of 
        // the missed shot

        const ship1Coordinates = ['1,1','1,2','1,3','1,4'];
        const ship2Coordinates = ['2,1','2,2','2,3','2,4'];

        if (ship1Coordinates.includes(coordinates)) {
            return ship1
        } else {
            return 'miss'
        }


        // console.log(ship1)
        // console.log(ship2)


        

    };

    const existence = 'exists';


    return {
        receiveAttack,
        existence
    };


};


export { createGameBoard }