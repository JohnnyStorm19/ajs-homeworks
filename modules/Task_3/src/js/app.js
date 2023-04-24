import Game, {GameSavingData, readGameSaving as loadgame, writeGameSaving as saveGame} from './game.js'

const game = new Game();
game.start();
console.log('app worked');