function EnemyLand1(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.velocity.x = -50;
}

function rush(enemyLand1, player){//kill enemy and do damage to player
		enemyLand1.kill();
		hp -=3;
		bgm.play();//make sounds
	}

EnemyLand1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyLand1.prototype.constructor = EnemyLand1;

EnemyLand1.prototype.update = function() {
	game.physics.arcade.overlap(this, player, rush, null, this);

}