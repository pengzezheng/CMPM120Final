function Explosion(game, key) {
	//call to Phaser.Sprite // new Sprite(game, x, y, frame)
	Phaser.Sprite.call(this, game, 400, 85, key);
	this.anchor.set(0.5);
	//enable physics
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.enableBody = true;
	this.body.collideWorldBounds = false;
	//this.explosion.play('', 0, 1, false);
	//counter 
	this.count = 0;
}

//explicitly define prefab's prototype (Phaser.Sprite) and constructor 
Explosion.prototype = Object.create(Phaser.Sprite.prototype);
Explosion.prototype.constructor = Explosion;

Explosion.prototype.update = function() { 
		//explosion animation/size change
		if(this.count < 70) {
				/*col = Phaser.Color.getRandomColor();
				this.tint = col;*/
				if(this.count < 30) {
						this.scale.setTo(this.count*0.1, this.count*0.1);
				}
				this.count++;
		}
		//kill it 
		else {
				this.kill();
		}
}