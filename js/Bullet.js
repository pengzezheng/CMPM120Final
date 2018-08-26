function Bullet(game, key){
	Phaser.Sprite.call(this, game, 400, 85, 'theBullet');// call phaser sprite
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//this.tracking=true;
}

function hit(bullet, player){//kill bullet and do damage
		bullet.kill();
		hp -=1;
		//bgm.play();//make sounds
	}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	game.physics.arcade.overlap(this, player, hit, null, this);
}