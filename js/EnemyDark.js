function EnemyDark(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.1);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;//enable body
	this.animations.add('dark', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);// add animation
}

	
EnemyDark.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyDark.prototype.constructor = EnemyDark;

function hitDark(enemyDark, player){//kill enemy and do damage to player
		enemyDark.kill();//kill enemy
		Monster.play();//sound effect
		if(widthLife.width < 0){//adjust hp of player
			widthLife.width = 0;
		}
		widthLife.width = widthLife.width - totalLife/4;// do damage to player
}

EnemyDark.prototype.update = function() {
	this.animations.play('dark');// play animation
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){// move to player if the light is up
		game.physics.arcade.moveToObject(this,player,400);
	}else{
		this.body.stop();
	}
	game.physics.arcade.overlap(this, player, hitDark, null, this);// overlap enabled
} 