function Bomb(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.gravity=200;
	game.time.create();
}

function explo(bomb, player){//kill bullet and do damage
		bomb.kill();
		bgm.play();//make sounds
	}

Bomb.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bomb.prototype.constructor = Bomb;

Bomb.prototype.update = function() {
	timer.add(Phaser.Timer.SECOND*2, this.explo, this);
}	