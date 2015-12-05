# Classes Documentation

**Full JSDoc documentation can be found in the `jsdoc` folder inside `docs`.**

## AI Class (ai.js)
The AI Class contains methods pertaining to the operation of the AI character. A full description of the AI algorithm is included in `ai_algorithm.md`

## Game Logic (gamelogic.js)
The Game Logic class contains methods that manage turns and victory conditions. More details on this class are included in `game_logic.md`.

## Grid (grid.js)
The Grid class manages a 3x3 grid, storing occupied spaces, reporting on spaces claimed, and updates a DOM object to provide a visual representation. It is implemented as a Singleton class, as typically only one instance is needed until it is destroyed and reinitalized upon a game restart. More details on this class are included in `grid.md`.

## Player (player.js)
The Player class manages information on a player, specifically the Player Name, and game symbol. It essentially exists to store fields.

## Easter Eggs (joshua.js)
Sometimes bad ideas manifest themselves into code. These never should have made their way into master branch.
