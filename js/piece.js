function Piece(pos, color) {
  this.pos = pos; //
  this.color = color; //Binary, white = true
  this.image = NULL;
}

Piece.prototype.moveTo = function (pos) {
  this.pos = pos;

  this.image.setPosition(
    400-112.5+45*this.pos[0],
    300-112.5+45*this.pos[1]
  );
}
