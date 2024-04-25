// DO NOT MODIFY THIS FILE

/**
 * Tic Tac Toe but on nine boards.
 * @namespace UltimateTicTacToe
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class UltimateTicTacToeGameManager extends GameManager {}

UltimateTicTacToeGameManager.gameVersion = '50e7a74ecd23f8e98bbe235fc2aa7db662a607ebdeb59ad3e5a4213cff4f8a43';

UltimateTicTacToeGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = UltimateTicTacToeGameManager;
