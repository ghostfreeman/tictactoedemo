/*
 * Load in classes
 */
var grid = new Grid("grid");
//var gameObj = new GameLogic();
//var AIPlayer = new player()
var activePlayer = null;

/**
 * Event: Prompt the user to define his name and symbol. Event thrown on
 * pageload
 */
$(document).ready(function(){
  $('#InitModal').modal();
});

/**
 * Event: User provides a name for their player profile in the modal. Event thrown
 * when user saves from the Modal.
 */
$("#InitModalProc").click(function(event) {
  //Create new player object for the Human Player
  humanPlayer = new Player($('#playerName').val(), $("#playerSymbol").val(), true);

  //Create new player object for the AI Player
  if($("#playerSymbol").val() == "X") {
    var AISymbol = "O";
  } else {
    var AISymbol = "X";
  }

  AIPlayer = new Player("Mr. Meeseeks", AISymbol, false);
  AISystem = new AI(AIPlayer.symbol);

  //Close modal and start the game!
  gameObj = new GameLogic();
  $("#ForfeitGame").toggle();
  $('#InitModal').modal('hide');
});

/**
 * Event: User selects to start a new game. Event thrown when user chooses to start
 * a new game after the last game ends
 */
$("#InitNewGame").click(function(event) {
  $('#InitModal').modal('show');
});

/**
 * Event: User selects the "Forfeit game" option.
 */
$("#ForfeitGame").click(function(event) {
  $("#quitModal").modal('show');
  gameObj.restartGame();
});

/**
 * Event: User selects the "Return to game" option
 */
$("#ModalIWillNotQuit").click(function() {
  $("#quitModal").modal('hide');
});

/**
 * Event: User selects the "Quit Game" option
 */
$("#ModalIGiveUp").click(function() {
  $("quitModal").modal('hide');
  gameObj.restartGame();
});

/**
 * Event: User starts a new game
 */
$("#ModalRestartGame").click(function() {
  //TODO Restart game
  grid.resetGrid();
  activePlayer = null;
  $("#victoryModal").modal('hide');
  $('#InitModal').modal('show');
});

/**
 * Event: Throws when a user clicks on a Cell.
 */
$(".cell").click(function(event) {
  activePlayer = "humanPlayer";

  //Check if occupied
  if(grid.isCellOccupied($(event.target).data("cell-id"))) {
    // Do nothing
  } else {
    //Claim it and draw cell
    grid.claimCell($(event.target).data("cell-id"), humanPlayer.symbol);
    var playerEval = eval(activePlayer);
    //Check for victory condition
    if(gameObj.checkForWin(grid, humanPlayer.symbol)) {
      //Victory, end game
      gameObj.endGame(grid, playerEval);
    } else {
      //AI gets its turn
      AISystem.detectPossibleWinConditions(grid, gameObj);
      activePlayer = "AIPlayer";
      gameObj.endTurn(grid);
    }
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
