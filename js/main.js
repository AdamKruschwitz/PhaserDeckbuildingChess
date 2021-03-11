var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#c5c5c5',
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.svg('kingB', '/assets/KingB.svg');
  this.load.svg('kingW', '/assets/KingW.svg');
}

function create ()
{
  var grid = new Board(4, this);

  this.add.image(400-22.5, 300-22.5, 'kingB');
  this.add.image(400-22.5, 300+22.5, 'kingB');
  this.add.image(400+22.5, 300+22.5, 'kingW');
  this.add.image(400+22.5, 300-22.5, 'kingW');
}
