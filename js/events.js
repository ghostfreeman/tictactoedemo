/*
 * Load in classes
 */
var grid = new Grid("grid");
var gameObj = new GameLogic();

/**
 * Event: Throws when a user clicks on a Cell.
 */
$(".cell").click(function(event) {
  console.log("Cell click");

  //Check if occupied
  if(grid.isCellOccupied($(event.target).data("cell-id"))) {
    // Do nothing
  } else {
    //Claim it
    grid.claimCell($(event.target).data("cell-id"), "X");
    //Redraw grid

    //Hand off turn to next player
  }
});

/**
 * Event: Keyboard sequence (Konami Code) turns the game into a magical
 * WarGame simulation. User cannot interact with the simulation unless
 * s/he clicks Exit.
 */

/**
 * Event: Keyboard sequence (Chrono Trigger LARA code) summons a giant head
 * in your JavaScript console.
 */
