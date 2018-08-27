function EnemyDark(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
}

	
EnemyDark.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyDark.prototype.constructor = EnemyDark;

EnemyDark.prototype.update = function() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		game.physics.arcade.moveToObject(this,player);
	}else{
		this.body.stop();
	}
} 