function Bullet(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	this.scale.setTo(0.5);
	//this.tracking=true;
	game.debug.body(this);
	game.time.events.loop(Phaser.Timer.SECOND*5, function() {this.destroy();}, this);
}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	game.physics.arcade.overlap(this, player, hit, null, this);
}

Bullet.prototype.hit = function(){//kill bullet and do damage
		this.destroy();
		
		//bgm.play();//make sounds
	}