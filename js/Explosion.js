function Explosion(game, key) {
	//call to Phaser.Sprite // new Sprite(game, x, y, frame)
	Phaser.Sprite.call(this, game, 400, 85, key);
	this.anchor.set(0.5);
	//enable physics
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.enableBody = true;
	this.body.collideWorldBounds = false;
	//counter 
	this.count = 0;
}

function explos(explosion, player){//kill enemy and do damage to player
		widthLife.width = widthLife.width - totalLife/100;
	}

//explicitly define prefab's prototype (Phaser.Sprite) and constructor 
Explosion.prototype = Object.create(Phaser.Sprite.prototype);
Explosion.prototype.constructor = Explosion;

Explosion.prototype.update = function() { 
		//explosion animation/size change
		game.physics.arcade.overlap(this, player, explos, null, this);
		if(this.count < 40) {
				if(this.count < 30) {
					this.scale.setTo(0.1+this.count*0.1, 0.1+this.count*0.1);
				}
				this.count++;
		}
		//kill it 
		else {
				this.kill();
		}
}