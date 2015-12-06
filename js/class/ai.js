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
  this.playerCharacter = typeof playerCharacter !== 'undefined' ? playerCharacter : "X";
  this.grid = [];
}

/**
 * Computer makes an educated choice on a space to claim, and then after determining
 * which potential move to make, selects it based on highest possible outcome for
 * victory. The Minimax algorithm is used to calculate the essential space to play at.
 *
 *
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

/**
 *
 *
 *
 */
AI.prototype.selectBestSpace = function() {

}
