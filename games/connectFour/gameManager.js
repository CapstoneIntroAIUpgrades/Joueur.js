// DO NOT MODIFY THIS FILE

/**
 * The traditional 6x7 board with pieces.
 * @namespace ConnectFour
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class ConnectFourGameManager extends GameManager {}

ConnectFourGameManager.gameVersion = 'ff3da34375459be10b77fd8f82b24d9880f0a100e48e2202812118bfcfd42e1e';

ConnectFourGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = ConnectFourGameManager;
