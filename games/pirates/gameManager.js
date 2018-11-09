// DO NOT MODIFY THIS FILE

/**
 * Steal from merchants and become the most infamous pirate.
 * @namespace Pirates
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class PiratesGameManager extends GameManager {}

PiratesGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
  Port: require('./port'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = PiratesGameManager;
