/**
 * @file Player Class
 * @author Cameron Kilgore
 */

/**
 * Player class
 * @constructor
 */
function Player(name, symbol) {
  this.name = typeof name !== 'undefined' ? name : "Chopped Liver";
  this.symbol = symbol;
}
