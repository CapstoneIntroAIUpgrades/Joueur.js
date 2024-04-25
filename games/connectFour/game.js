// Game: The traditional 6x7 board with pieces.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * The traditional 6x7 board with pieces.
 * @extends BaseGame
 * @memberof ConnectFour
 */
class Game extends BaseGame {
  /**
   * Initializes a Game with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    /**
     * The name of the game.
     * @type {string}
     */
    this.name = 'ConnectFour';

    // default values for private member values
    this.cols = 0;
    this.gameObjects = {};
    this.players = [];
    this.repString = '';
    this.rows = 0;
    this.session = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The number of tiles on the board along the y (vertical) axis.
   *
   * @type {number}
   */
  get cols() {
    return client.gameManager.getMemberValue(this, 'cols');
  }

  set cols(value) {
    client.gameManager.setMemberValue(this, 'cols', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, ConnectFour.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<ConnectFour.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * A string describing all of the information necessary to fully represent the game's state.
   *
   * @type {string}
   */
  get repString() {
    return client.gameManager.getMemberValue(this, 'repString');
  }

  set repString(value) {
    client.gameManager.setMemberValue(this, 'repString', value);
  }


  /**
   * The number of cells on the board along the x (horizontal) axis.
   *
   * @type {number}
   */
  get rows() {
    return client.gameManager.getMemberValue(this, 'rows');
  }

  set rows(value) {
    client.gameManager.setMemberValue(this, 'rows', value);
  }


  /**
   * A unique identifier for the game instance that is being played.
   *
   * @type {string}
   */
  get session() {
    return client.gameManager.getMemberValue(this, 'session');
  }

  set session(value) {
    client.gameManager.setMemberValue(this, 'session', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
