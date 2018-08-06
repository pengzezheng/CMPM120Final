function EnemyTorrent(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
	game.time.events.loop(Phaser.Timer.SECOND, shootBullet, this);
}

function shootBullet(){
	bullet=new Bullet(game, "diamond");
	bullet.reset(this.body.x,this.body.y);
	if(this.body.x > player.x){
		if(this.body.x< player.x+250){
			bullet.body.velocity.x=-50;
			game.add.existing(bullet);
		}
	}else{
		if(player.x< this.body.x+250){
			bullet.body.velocity.x=50;
			game.add.existing(bullet);
		}
	}
}

EnemyTorrent.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyTorrent.prototype.constructor = EnemyTorrent;

EnemyTorrent.prototype.update = function() {
	
}