# Grid Documentation

## How the grid is managed
The grid itself is essentially a series of objects stored in an array, visually represented in 3x3 sequence. Upon creation of the grid, each possible grid element is nulled out, and stays that way until the object is destroyed (pending a player-opted restart).

All cells are represented by coordinate sequences, visually represented by the table below. The object will reject any references to cells that do not match their representation.

```
TL | TC | TR
CL | CC | CR
BL | BC | BR
```
