function Board(size, phaserObject) {
  this.size = size
  this.grid = []
  this.phaser = phaserObject;

  // initialize grid
  for(i=0; i<this.size; i++) {
    let row = [];
    for(j=0; j<this.size; j++) row.push(null);
    this.grid.push(row);
  }

  this.image = this.phaser.add.grid(400, 300, 45*4, 45*4, 45, 45, 0xEEEEEE).setAltFillStyle(0x3F3F3F);
}

Board.prototype.addPiece = function(piece, pos) {
  if(this.isSquareValid(pos)) {
    this.grid[pos[0]][pos[1]] = piece;
    return true;
  }
  else return false
}

Board.prototype.isSquareValid = function(pos) {
  // TODO: Remake this or get rid of it. Will code peice movement restrictions later and this will be redundant.
  return (this.grid[pos[0]][pos[1]] == null)
}
