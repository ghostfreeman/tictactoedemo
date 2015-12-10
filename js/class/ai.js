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
 * victory.
 *
 *
 */
AI.prototype.detectPossibleWinConditions = function(grid, gameObject) {
  //Copy gamelogic and grid objects for incremental calculation
  var AIGridCopy = grid;
  var AIGameObject = gameObject;
  var activeGrid = AIGridCopy.returnAllCells();

  //Start with the horizontal rows
  var TopHorizScore = this.getWinScore(grid.grid[0].value, grid.grid[1].value, grid.grid[2].value, humanPlayer.symbol, this.playerCharacter);
  var CenterHorizScore = this.getWinScore(grid.grid[3].value, grid.grid[4].value, grid.grid[5].value, humanPlayer.symbol, this.playerCharacter);
  var BottomHorizScore = this.getWinScore(grid.grid[6].value, grid.grid[7].value, grid.grid[8].value, humanPlayer.symbol, this.playerCharacter );

  //Now the vertical columns
  var LeftVertScore = this.getWinScore(grid.grid[0].value, grid.grid[3].value, grid.grid[6].value, humanPlayer.symbol, this.playerCharacter);
  var CenterVertScore = this.getWinScore(grid.grid[1].value, grid.grid[4].value, grid.grid[7].value, humanPlayer.symbol, this.playerCharacter);
  var RightVertScore = this.getWinScore(grid.grid[2].value, grid.grid[5].value, grid.grid[8].value, humanPlayer.symbol, this.playerCharacter);

  //Diagonal segments
  var DiagRightScore = this.getWinScore(grid.grid[0].value, grid.grid[4].value, grid.grid[8].value, humanPlayer.symbol, this.playerCharacter);
  var DiagLeftScore = this.getWinScore(grid.grid[2].value, grid.grid[4].value, grid.grid[6].value, humanPlayer.symbol, this.playerCharacter);

  //Now we estimate the best maneuver by looking for the one that scored the highest.
  //The lowest score indicates that there is a greater chance of winning if we select that
  //space
  var hasCalculatedMove = false;

  this.selectRandomSpace();
}

/**
 * Scores the row for any potential matches.
 *
 * +1 point for a cell that is occupied by that player
 * No points are added for empty squares
 */
AI.prototype.getWinScore = function(cell1, cell2, cell3, competitorSymbol, yourSymbol) {
  var humanScore = 0;
  var aiScore = 0;

  //Add up all the cells
  if (cell1 == competitorSymbol) {
    humanScore++;
  } else if (cell1 == yourSymbol) {
    aiScore++;
  } else {

  }

  if (cell2 == competitorSymbol) {
    humanScore++;
  } else if (cell2 == yourSymbol) {
    aiScore++;
  } else {

  }

  if (cell3 == competitorSymbol) {
    humanScore++;
  } else if (cell3 == yourSymbol) {
    aiScore++;
  } else {

  }

  var ret = [humanScore, aiScore];
  return ret;
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
    var cell_coord = this.convertNumericCoordToLiteralCoord((Math.floor(Math.random()*8)));
    turn_complete = grid.claimCell(cell_coord, this.playerCharacter);
  } while (!turn_complete);
}

/**
 *
 *
 *
 */
AI.prototype.selectBestSpace = function() {

}

/**
 *
 */
AI.prototype.convertNumericCoordToLiteralCoord = function(numCoord) {
  var literal = null;
  switch(numCoord) {
    case 0:
      literal = "TL";
      break;
    case 1:
      literal = "TC";
      break;
    case 2:
      literal = "TR";
      break;
    case 3:
      literal = "CL";
      break;
    case 4:
      literal = "CC";
      break;
    case 5:
      literal = "CR";
      break;
    case 6:
      literal = "BL";
      break;
    case 7:
      literal = "BC";
      break;
    case 8:
      literal = "BR";
      break;
    default:
      break;
  }

  return literal;
}
