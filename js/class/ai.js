/**
 * @file AI class
 * @author Cameron Kilgore
 */

/**
 * AI class
 * @constructor
 * @
 */
function AI(playerCharacter) {
  this.playerCharacter = this.length = typeof playerCharacter !== 'undefined' ? playerCharacter : "X";
  this.grid = [];
}

/**
 * Determine if the player's last move warrants a potential win condition, and
 * if so, places an opposing character to prevent it. Otherwise, place an
 * opposing character in a random location
 */
AI.prototype.detectPossibleWinConditions = function() {

}

/**
 * Analyze the gameboard. Essentially a pipe for data sent from the Grid object's
 * results method
 */
AI.prototype.analyzeGrid = function(gameGrid) {
  this.grid = gameGrid;
}

/**
 * Pick a random space and claim it. Continue to run for a claim on a random
 * space until one is picked (since Grid object determines the status of
 * claimed spaces)
 */
AI.prototype.selectRandomSpace = function() {
  var turn_complete = false;
  do {
    var cell_coord = (Math.floor(Math.random()*8) + 1);
    turn_complete = GridObj.claimCell(cell_coord, "X");
  } while (!turn_complete);
}
