function Bullet(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	this.scale.setTo(0.5);
	game.debug.body(this);
	game.time.events.loop(Phaser.Timer.SECOND*5, function() {this.destroy();}, this);//in case memory leak
}

function hitBullet(bullet,player){
	Hit.play();//sound effect
	this.kill();//kill it
	life.width = life.width - totalLife/5;//do damage to player
}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
	game.physics.arcade.overlap(this, player, hitBullet, null, this);//enable collision
}
