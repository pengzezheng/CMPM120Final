function Bomb(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.gravity=200;
	game.time.create();
}

function explo(bomb, player){//kill bullet and do damage
		bomb.kill();
		hp -=3;
		bgm.play();//make sounds
	}

Bomb.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bomb.prototype.constructor = Bullet;

Bomb.prototype.update = function() {
	
}	