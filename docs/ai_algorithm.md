# AI Processes

## Main Logic
Based on the requirements, we are not supposed to have a situation where the player cannot win the game, nor can the AI (Although it is always a possibility). So from a design perspective, we merely want to have the AI actively detect when the player could attempt to win the game, and then actively interfere with the player's ability to win by blocking all attempts at victory, until the grid fills up. In the circumstances the AI can't find a certain victor for the player, the AI selects a random cell.

The Flowchart describes the basic process the AI will run through during its own turn, which occurs after the player completes his turn.

![AI Flowchart](http://i.imgur.com/gTBuBWC.png)

## Monitoring grid for victory conditions
TBD
