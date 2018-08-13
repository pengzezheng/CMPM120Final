function EnemyLand1(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	//this.body.gravity.y=100;
}

/*function rush(enemyLand1, player){//kill enemy and do damage to player
		enemyLand1.kill();
		//player.kill();
		widthLife.width -= totalLife/4;
		//game.state.start('GameOverState');
		//bgm.play();//make sounds
	}*/

EnemyLand1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyLand1.prototype.constructor = EnemyLand1;

EnemyLand1.prototype.update = function() {
	//game.physics.arcade.overlap(this, player, rush, null, this);
	if (player.y >= 750){
		game.physics.arcade.moveToObject(this,player);
	}
	if(this.y >800 || this.y <790){
		this.y=800;
	}
	game.world.wrap(this, 0, true);

} 