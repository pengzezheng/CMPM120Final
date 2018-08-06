function Bullet(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this);//enable physics
	this.enableBody=true;
}

function hit(bullet, player){//kill bullet and do damage
		bullet.kill();
		hp -=1;
		bgm.play();//make sounds
	}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	game.physics.arcade.overlap(this, player, hit, null, this);
}