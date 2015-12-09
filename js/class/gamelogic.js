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
  console.log("AI Turn begins here");
}

/**
 * Locks the grid, and ends the game
 */
GameLogic.prototype.endGame = function(grid, winningPlayer) {
  console.log("End Game");
  console.debug("winningPlayer", winningPlayer);
  $("#victoryModal p span").html(winningPlayer.name);
  $("#victoryModal").modal('show');
}

/**
 * Checks the entire grid for a possible victory condition by either:
 * * Checking to see if any vertical column has a matching sequence
 * * Checking to see if any horizontal row has a matching sequence
 * * Checking to see if the two diagonal segments has a matching sequence
 * * Checking to see if any space is no longer empty
 */
GameLogic.prototype.checkForWin = function(grid, playerSymbol) {
  if(this.confirmVertColumnsMatchThree(grid, playerSymbol) ||
     this.confirmHorizRowMatchThree(grid, playerSymbol) ||
     this.confirmDiagSegMatchThree(grid, playerSymbol)
  ) {
    //Victory condition
    return true;
  } else {
    //Do Nothing
    return false;
  }
}

/**
 * Checks to see if all spaces are no longer empty
 */
GameLogic.prototype.confirmGridNotEmpty = function() {

}

/**
 * Checks to see if any vertical column has a matching 3 sequence
 */
GameLogic.prototype.confirmVertColumnsMatchThree = function(grid, playerSymbol) {
  var TL = grid.getGridCell("TL");
  var TC = grid.getGridCell("TC");
  var TR = grid.getGridCell("TR");
  var CL = grid.getGridCell("CL");
  var CC = grid.getGridCell("CC");
  var CR = grid.getGridCell("CR");
  var BR = grid.getGridCell("BR");
  var BC = grid.getGridCell("BC");
  var BL = grid.getGridCell("BL");

  //Left column (TL, CL, BL)
  if(
    (TL == playerSymbol) &&
    (CL == playerSymbol) &&
    (BL == playerSymbol)
  ) {
    console.log("Victory column left");
    return true;
  } else {
    //
  }

  //Center column (TC, CC, BC)
  if(
    (TC == playerSymbol) &&
    (CC == playerSymbol) &&
    (BC == playerSymbol)
  ) {
    console.log("Victory column center");
    return true;
  } else {
    //
  }

  //Right column (TR, CR, BR);
  if(
    (TR == playerSymbol) &&
    (CR == playerSymbol) &&
    (BR == playerSymbol)
  ) {
    console.log("Victory column right");
    return true;
  } else {
    //
  }

  return false;
}

/**
 * Checks to see if any horizontal row has a matching 3 sequence
 */
GameLogic.prototype.confirmHorizRowMatchThree = function(grid, playerSymbol) {
  var TL = grid.getGridCell("TL");
  var TC = grid.getGridCell("TC");
  var TR = grid.getGridCell("TR");
  var CL = grid.getGridCell("CL");
  var CC = grid.getGridCell("CC");
  var CR = grid.getGridCell("CR");
  var BR = grid.getGridCell("BR");
  var BC = grid.getGridCell("BC");
  var BL = grid.getGridCell("BL");

  //Top Row (TL, TC, TR)
  if(
    (TL == playerSymbol) &&
    (TC == playerSymbol) &&
    (TR == playerSymbol)
  ) {
    console.log("Victory top row");
    return true;
  } else {
    //return false;
  }

  //Center Row (CL, CC, CR)
  if(
    (CL == playerSymbol) &&
    (CC == playerSymbol) &&
    (CR == playerSymbol)
  ) {
    console.log("Victory center row");
    return true;
  } else {
    //return false;
  }

  //Bottom Row (BL, BC, BR)
  if(
    (BL == playerSymbol) &&
    (BC == playerSymbol) &&
    (BR == playerSymbol)
  ) {
    console.log("Victory center row");
    return true;
  } else {
    //return false;
  }

  return false;
}

/**
 * Checks to see if any diagonal segment has a matching 3 sequence
 */
GameLogic.prototype.confirmDiagSegMatchThree = function(grid, playerSymbol) {
  var TL = grid.getGridCell("TL");
  var TR = grid.getGridCell("TR");
  var CC = grid.getGridCell("CC");
  var BR = grid.getGridCell("BR");
  var BL = grid.getGridCell("BL");

  //TL, CC, BR
  if(
    (TL == playerSymbol) &&
    (CC == playerSymbol) &&
    (BR == playerSymbol)
  ) {
    console.log("Victory Diag Right");
    return true;
  } else {
    return false;
  }

  //TR, CC, BL
  if(
    (TR == playerSymbol) &&
    (CC == playerSymbol) &&
    (BL == playerSymbol)
  ) {
    console.log("Victory Diag Left");
    return true;
  } else {
    return false;
  }
}
