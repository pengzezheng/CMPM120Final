function EnemyDark(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.1);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
	this.animations.add('dark', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
}

	
EnemyDark.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyDark.prototype.constructor = EnemyDark;

function hitDark(enemyDark, player){//kill enemy and do damage to player
		enemyDark.kill();

		
		if(widthLife.width < 0){
			widthLife.width = 0;
		}

		widthLife.width = widthLife.width - totalLife/4;

		

}

EnemyDark.prototype.update = function() {
	this.animations.play('dark');
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		game.physics.arcade.moveToObject(this,player,500);
	}else{
		this.body.stop();
	}
	game.physics.arcade.overlap(this, player, hitDark, null, this);
} 