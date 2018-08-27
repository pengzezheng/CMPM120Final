function EnemyHold(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
	var temp=0;
}

EnemyHold.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyHold.prototype.constructor = EnemyHold;

EnemyHold.prototype.update = function() {
	game.physics.arcade.overlap(this, player, holding, null, this);
	game.time.events.loop(Phaser.Timer.SECOND*2, shootBullet, this);
} 