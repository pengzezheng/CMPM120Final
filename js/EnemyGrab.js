function EnemyGrab(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
}

EnemyGrab.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyGrab.prototype.constructor = EnemyGrab;

EnemyGrab.prototype.update = function() {
	
}