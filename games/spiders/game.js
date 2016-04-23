// Generated by Creer at 10:56PM on April 20, 2016 UTC, git hash: '087b1901032ab5bed5806b24830233eac5c2de55'
// This is a simple class to represent the Game object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var BaseGame = require(__basedir + "/joueur/baseGame");

// game object classes
var Weaver = require("./weaver");
var Spitter = require("./spitter");
var BroodMother = require("./broodMother");
var Spiderling = require("./spiderling");
var Web = require("./web");
var Player = require("./player");
var Cutter = require("./cutter");
var Nest = require("./nest");
var GameObject = require("./gameObject");
var Spider = require("./spider");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc There's an infestation of enemy spiders challenging your queen broodmother spider! Protect her and attack the other broodmother in this turn based, node based, game.
 * @extends BaseGame
 */
var Game = Class(BaseGame, {
    /**
     * initializes a Game with basic logic as provided by the Creer code generator
     *
     * @memberof Game
     * @private
     */
    init: function() {
        BaseGame.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

        /**
         * The name of the game.
         */
        this.name = "Spiders";


        /**
         * The player whose turn it is currently. That player can send commands. Other players cannot.
         *
         * @name Game#currentPlayer
         * @type Player
         */
        this.currentPlayer = null;

        /**
         * The current turn number, starting at 0 for the first player's turn.
         *
         * @name Game#currentTurn
         * @type number
         */
        this.currentTurn = 0;

        /**
         * The speed at which Cutters work to do cut Webs.
         *
         * @name Game#cutSpeed
         * @type number
         */
        this.cutSpeed = 0;

        /**
         * Constant used to calculate how many eggs BroodMothers get on their owner's turns.
         *
         * @name Game#eggsScalar
         * @type number
         */
        this.eggsScalar = 0;

        /**
         * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
         *
         * @name Game#gameObjects
         * @type Object.<string, GameObject>
         */
        this.gameObjects = {};

        /**
         * The starting strength for Webs.
         *
         * @name Game#initialWebStrength
         * @type number
         */
        this.initialWebStrength = 0;

        /**
         * The maximum number of turns before the game will automatically end.
         *
         * @name Game#maxTurns
         * @type number
         */
        this.maxTurns = 0;

        /**
         * The speed at which Spiderlings move on Webs.
         *
         * @name Game#movementSpeed
         * @type number
         */
        this.movementSpeed = 0;

        /**
         * Every Nest in the game.
         *
         * @name Game#nests
         * @type Array.<Nest>
         */
        this.nests = [];

        /**
         * List of all the players in the game.
         *
         * @name Game#players
         * @type Array.<Player>
         */
        this.players = [];

        /**
         * A unique identifier for the game instance that is being played.
         *
         * @name Game#session
         * @type string
         */
        this.session = "";

        /**
         * The speed at which Spitters work to spit new Webs.
         *
         * @name Game#spitSpeed
         * @type number
         */
        this.spitSpeed = 0;

        /**
         * How much web strength is added or removed from Webs when they are weaved.
         *
         * @name Game#weavePower
         * @type number
         */
        this.weavePower = 0;

        /**
         * The speed at which Weavers work to do strengthens and weakens on Webs.
         *
         * @name Game#weaveSpeed
         * @type number
         */
        this.weaveSpeed = 0;

        /**
         * Every Web in the game.
         *
         * @name Game#webs
         * @type Array.<Web>
         */
        this.webs = [];


        this._gameObjectClasses = {
            "Weaver": Weaver,
            "Spitter": Spitter,
            "BroodMother": BroodMother,
            "Spiderling": Spiderling,
            "Web": Web,
            "Player": Player,
            "Cutter": Cutter,
            "Nest": Nest,
            "GameObject": GameObject,
            "Spider": Spider,
        };

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Game;