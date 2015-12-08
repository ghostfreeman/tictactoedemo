/**
 * @file Player Class
 * @author Cameron Kilgore
 */

/**
 * Player class
 * @constructor
 */
function Player(name, symbol, isHuman) {
  this.name = typeof name !== 'undefined' ? name : "Chopped Liver";
  this.symbol = symbol;
  this.isHumanPlayer = typeof isHuman !== 'undefined' ? isHuman : true;
}

/**
 * Change the player symbol
 */
Player.prototype.changeSymbol = function(symbol) {
  this.symbol = symbol;
}

/**
 * Change the player name
 */
Player.prototype.changeName = function(name) {
  this.name = name;
}
