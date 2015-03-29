# Joueur.py
A simple JavaScript game client for the Cadre framework to connect to [Cerveau](https://github.com/JacobFischer/Cerveau) servers.

![{Cadre}](http://i.imgur.com/17wwI3f.png)

All inspiration taken from [MS&T's SIG-GAME framework](https://github.com/siggame), and most of the terminology is assuming some familiarity with it as this is a spiritual successor to it.

## Features

* Multi-Game:
  * One client can have multiple AIs to play different games.
* Easy generation of new game AIs using the [Creer](https://github.com/JacobFischer/Creer) codegen
  * Most of the game code is easy to replace using generatedObjName.js files to ease Creer codegene re-runs.
* No game specific logic. All logic is done server side. Here on clients we just merge deltas into the game state.
* Generated game classes are slim and can be extended by coders without breaking client server communication.
* A simple Class implimentation that support multiple inheritance, mimicing Python's Classes.
* Networking via Socket IO
  * Communication via json strings with support for cycles within game references
  * Only deltas in states are send over the network

## How to Run

```
python main.py -g GAME_NAME -s SERVER -p PORT -n PLAYER_NAME
```

That's it. Make sure there is a server at `-s`. It defaults to localhost if not given. The game you want to play must be present on the server. 


## Other notes

This is a polished proof-of-concept part of the Cadre framework. There are plently of bugs and issues present. The purpose at this time is not to be perfect, but to show that this framework is robust and meets all the needs of MS&T's ACM SIG-GAME.
