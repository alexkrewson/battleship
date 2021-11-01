
import { createGameBoard } from './gameBoard'
const testGame = createGameBoard();



test('game exists', () => {
    expect(testGame.existence).toBe('exists');
});
