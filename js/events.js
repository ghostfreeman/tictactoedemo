/*
 * Load in classes
 */
var grid = new Grid("grid");
//var gameObj = new GameLogic();
//var AIPlayer = new player()

/**
 * Event: Prompt the user to define his name and symbol. Event thrown on
 * pageload
 */
$(document).ready(function(){
  $('#InitModal').modal();
});

/**
 * Event: User provides a name for their player profile in the modal.
 */
$("#InitModalProc").click(function(event) {
  //Create new player object for the Human Player
  var humanPlayer = new Player($('#playerName').val(), "X", true)

  //Create new player object for the AI Player
  var AIPlayer = new Player("Mr. Meeseeks", "X", true)

  //Close modal and begin the game!
  $('#InitModal').modal('hide');
});

/**
 * Event: Throws when a user clicks on a Cell.
 */
$(".cell").click(function(event) {
  console.log("Cell click");

  //Check if occupied
  if(grid.isCellOccupied($(event.target).data("cell-id"))) {
    // Do nothing
  } else {
    //Claim it and draw cell
    grid.claimCell($(event.target).data("cell-id"), "X");
    //Check for victory condition

    //Hand off turn to next player
  }
});

/**
 * Event: Throws when user clicks on the "new game option"
 */

/**
 * Event: Keyboard sequence (Konami Code) turns the game into a magical
 * WarGame simulation. User cannot interact with the simulation unless
 * s/he clicks Exit.
 */

/**
 * Event: Keyboard sequence (Chrono Trigger LARA code) summons a giant head
 * in your JavaScript console.
 */
