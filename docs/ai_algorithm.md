# AI Processes

## Main Logic
Based on the requirements, we are not supposed to have a situation where the player cannot win the game, the computer must always win the game.

There are two possible approaches to assure a condition where the Human player loses: By forcing a draw by occupying all empty spaces (not necessarily a victory), or by winning by getting a sequence of three. In the latter case, the Minimax algorithm [\[1\]](http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html) [\[2\]](http://neverstopbuilding.com/minimax) provides a trivial and quick mechanism for the AI to determine potential grid locations to place its own symbols, and to secure victory.

## The Minimax Algorithm explained

## Monitoring grid for victory conditions
This logic is located inside Game Logic, which acts as a delegate for all game based events.

## My algorithm explained
* AI takes in the Game Grid and the Game Object (for its win-measuring logic)
* AI Iterates through the available choices, and makes an advanced move to see if any of them will produce a win condition (in essence, a iterative minimax)
* AI calculates the best available resources, and selects the highest value solution that could lead to a victory
** In the instance the AI finds multiple similar scoring solutions greater than two, the AI will instead claim a random space

Scoring works in the following manner
* Does the directional pattern contain all empty spaces?
