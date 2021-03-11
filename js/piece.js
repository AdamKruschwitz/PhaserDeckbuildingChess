// Abstract object for creating pieces and dictating how they can move.

function Piece(pos, color, phaserObject) {
  this.pos = pos; //
  this.color = color; //Binary, white = true
  this.phaser = phaserObject;
  this.image = null;
}

Piece.prototype.moveTo = function (pos) {
  this.pos = pos;

  this.image.setPosition(
    // TODO: do this better, maybe let board or UI object handle piece movement?
    400-112.5+45*this.pos[0],
    300-112.5+45*this.pos[1]
  );
}

// Abstract Functions
Piece.prototype.displayAvailableMoves = function() {}
Piece.prototype.isMoveValid = function (pos) {} // returns boolean
