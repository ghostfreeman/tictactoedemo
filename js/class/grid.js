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
    {"key": "TL", "value": null},
    {"key": "TC", "value": null},
    {"key": "TR", "value": null},
    {"key": "CL", "value": null},
    {"key": "CC", "value": null},
    {"key": "CR", "value": null},
    {"key": "BL", "value": null},
    {"key": 'BC', "value": null},
    {"key": "BR", "value": null},
  ];
  this.interfaceId = typeof interfaceID !== 'undefined' ? interfaceID : "grid";
}

/**
 * Gets the content of a grid cell.
 */
Grid.prototype.getGridCell = function(cell) {
  // look up cell in grid based on position

}

/**
 * Returns if cell is occupied
 */
Grid.prototype.isCellOccupied = function(cell) {
  //self = this;
  ret = false;

  // look up cell in grid based on position
  for (var i in this.grid) {
    if (cell == this.grid[i].key) {
      if(this.grid[i].value !== null) {
        ret = true;
        break;
      } else {
        break;
      }
    }
  }

  return ret;
}

/**
 * Claim a Grid cell. Return true if claimed without issue, return false if the
 * cell is already claimed (the program should then re-run this method with a
 * new cell request)
 */
Grid.prototype.claimCell = function(cell, character) {
  //self = this;

  for (var i in this.grid) {
    if (cell == this.grid[i].key) {
      if this.grid[i].value !== null {
        this.grid[i].value = character;
        ret = true;
        break;
      } else {
        break;
      }
    }
  }

  return ret;
}

/**
 * Redraw the entire grid
 */
Grid.prototype.redrawGrid = function() {
  $(".grid div.cell").each(function(index, value) {
    $(value).html()
  });
}

/**
 * Gets all the grid cells
 */
Grid.prototype.returnAllCells = function() {
  return this.grid;
}

/**
 * Reset the grid.
 */
Grid.prototype.resetGrid = function() {
for (var i in this.grid) {
    if (cell == this.grid[i].key) {
      this.grid[i].value = null;
    }
  }
}
