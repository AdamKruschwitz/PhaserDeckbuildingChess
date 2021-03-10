var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 200 }
      }
  },
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);
game.config.backgroundColor.setFromHSV(0, 0, .75);

function preload ()
{
  this.load.svg('kingB', '/assets/KingB.svg');
}

function create ()
{
  this.add.image(400, 300, 'kingB');
}
