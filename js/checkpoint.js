function Checkpoint(game, key, xPosition, yPosition) {
	var x, y;
	Phaser.Sprite.call(this, game, x, y, key);
	this.checkpointReached = false;
	this.x = xPosition;
	this.y = yPosition;
	this.game.physics.enable(this);
};

Checkpoint.prototype = Object.create(Phaser.Sprite.prototype);
Checkpoint.prototype.constructor = Checkpoint;

Checkpoint.prototype.update = function() {
	game.physics.arcade.overlap(this, player, reachCheckpoint, null, this);
}

function reachCheckpoint() {
	this.checkpointReached = true;
	console.log("Checkpoint is reached!");
} 