// DO NOT MODIFY THIS FILE

/**
 * Take turns moving your Amazons and blocking tiles.
 * @namespace Amazons
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class AmazonsGameManager extends GameManager {}

AmazonsGameManager.gameVersion = '1b2ac0db4655c0c135ffbf80607a97ab5434b880e1b76f1ade9fdaf44670ae23';

AmazonsGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = AmazonsGameManager;
