/**
 * @file Minimax Class
 * @author Cameron Kilgore
 */

/**
 * Minimax Class
 * @constructor
 */
function Minimax(max_depth) {
  this.MAXDEPTH = typeof max_depth !== 'undefined' ? max_depth : 7;
}

/**
 * The Minimax method
 */
Minimax.prototype.minimaxCalc = function() {

}

/**
 * Recursive tree builder
 */
Minimax.prototype.BuildGameTree = function() {

}

/**
 * Alter the Max Depth attribute for the Minimax tree. By default, it initalizes
 * at seven.
 *
 * I mean you could just change the value at the instance because JavaScript doesn't
 * do protected or private fields but what would be the fun in that?
 */
Minimax.prototype.alterMaxDepth = function(max_depth) {
  this.MAXDEPTH = max_depth;
}
