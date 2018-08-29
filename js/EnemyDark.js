function EnemyDark(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.1);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
}

	
EnemyDark.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyDark.prototype.constructor = EnemyDark;

function hitDark(enemyDark, player){//kill enemy and do damage to player
		
		enemyDark.kill();
		widthLife.width = widthLife.width - totalLife/4;
		

}

EnemyDark.prototype.update = function() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		game.physics.arcade.moveToObject(this,player,500);
	}else{
		this.body.stop();
	}
	game.physics.arcade.overlap(this, player, hitDark, null, this);
} 