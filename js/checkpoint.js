function Checkpoint(game, key) {
	Phaser.Sprite.call(this, game, 400, 500, key);
	this.game.physics.enable(this);
	this.enableBody=true;
	this.body.immovable=true;
};

Checkpoint.prototype = Object.create(Phaser.Sprite.prototype);
Checkpoint.prototype.constructor = Checkpoint;

Checkpoint.prototype.update = function() {
	
}
