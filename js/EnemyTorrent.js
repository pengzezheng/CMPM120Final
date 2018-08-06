function EnemyTorrent(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
}

function shootBullet(){
	bullet=new Bullet(game, "bulletA");
	bullet.body.x=this.x;
	bullet.body.y=this.y;
	game.add.existing(bullet);
}

EnemyTorrent.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyTorrent.prototype.constructor = EnemyTorrent;

EnemyTorrent.prototype.update = function() {
	if(this.body.x > player.x){
		if(this.body.x> player.x+250){
			game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, shootBullet, this);
		}
	}

	if(this.body.x < player.x){
		if(player.x> this.body.x+250){
			game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, shootBullet, this);
		}
	}
}