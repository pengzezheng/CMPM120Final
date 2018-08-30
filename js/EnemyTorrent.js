var bullet;
function EnemyTorrent(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.1);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	this.animations.add('enemyT', [0, 1, 2, 3], 10, true);//set animation
	this.anchor.setTo(0.5);//set anchor
	game.time.events.loop(Phaser.Timer.SECOND*5, shootBullet, this);//make it auto shooting
}

function shootBullet(){//shoot bullets out
	bullet=new Bullet(game, "theBullet");//call bullet
	bullet.reset(this.body.x,this.body.y);//reset the size
	if(this.body.x > player.x){// check player's position make sure turret can shoot to a correct direction
		if(player.x+250> this.body.x){//check whether player in shooting range
			bullet.body.velocity.x=-150;//reset velocity of bullet
			game.add.existing(bullet);//add it into the game
		}
	}else{// check player's position make sure turret can shoot to a correct direction
		this.scale.setTo(-0.1,0.1);
		if(player.x< this.body.x+250){//check range
			bullet.body.velocity.x=150;
			game.add.existing(bullet);
		}
	}
}

EnemyTorrent.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyTorrent.prototype.constructor = EnemyTorrent;

EnemyTorrent.prototype.update = function() {
	this.animations.play('enemyT');//play animation
} 