/**
 * @file Grid class
 * @author Cameron Kilgore
 */

/**
 * Grid class
 * @constructor
 * @
 */
function Grid(interfaceID) {
  this.grid = [
    {"key": TL, "value": null},
    {"key": TC, "value": null},
    {"key": TR, "value": null},
    {"key": CL, "value": null},
    {"key": CC, "value": null},
    {"key": CR, "value": null},
    {"key": BL, "value": null},
    {"key": BC, "value": null},
    {"key": BR, "value": null},
  ];
  this.interfaceId = typeof interfaceID !== 'undefined' ? interfaceID : "grid1";
}

/**
 * Alters the content of a Grid cell to any character passed through to it.
 * @param
 * @param
 */
Grid.prototype.alterGridCell = function(cell, character) {

}

/**
 * Gets the content of a grid cell.
 */
Grid.prototype.getGridCell = function(cell, character) {

}

/**
 * Claim a Grid cell. Return true if claimed without issue, return false if the
 * cell is already claimed (the program should then re-run this method with a
 * new cell request)
 */
Grid.prototype.claimCell = function(cell, character) {

}

/**
 * Gets all the grid cells
 */
Grid.prototype.returnAllCells = function(cell, character) {

}

/**
 * Redraw active cell element in the DOM
 */
Grid.prototype.redrawCell = function(cell, character) {

}

/**
 * Clear the Grid Cell. Typically not used during gameplay
 */
Grid.prototype.clearCell = function(cell, character) {

}

/**
 * Reset the grid.
 */
Grid.prototype.resetGrid = function() {

}
