/**
 * @file Game Logic Class
 * @author Cameron Kilgore
 */

/**
 * Game Logic class
 * @constructor
 * @
 */
function GameLogic() {

}

/**
 * Ends a turn
 */
GameLogic.prototype.endTurn = function() {

}

/**
 * Checks the entire grid for a possible victory condition by either:
 * * Checking to see if any vertical column has a matching sequence
 * * Checking to see if any horizontal row has a matching sequence
 * * Checking to see if the two diagonal segments has a matching sequence
 * * Checking to see if any space is no longer empty
 */
GameLogic.prototype.checkForWin = function() {

}

/**
 * Checks to see if all spaces are no longer empty
 */
GameLogic.prototype.confirmGridNotEmpty = function() {

}

/**
 * Checks to see if any vertical column has a matching 3 sequence
 */
GameLogic.prototype.confirmVertColumnsMatchThree = function() {
  /*for (var i in this.grid) {
    if (cell == this.grid[i].key) {
      if(this.grid[i].value !== null) {

      }
    }
  }*/
}

/**
 * Checks to see if any horizontal row has a matching 3 sequence
 */
GameLogic.prototype.confirmHorizRowMatchThree = function() {
  //Top Row (TL, TC, TR)

  //Center Row (CL, CC, CR)

  //Botom Row (BL, BC, BR)
}

/**
 * Checks to see if any diagonal segment has a matching 3 sequence
 */
GameLogic.prototype.confirmDiagSegMatchThree = function() {
  //TL, CC, BR

  //TR, CC, BL
}
