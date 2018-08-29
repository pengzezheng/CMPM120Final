var bullet;
function EnemyTorrent(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.1);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
	this.animations.add('enemyT', [0, 1, 2, 3], 10, true);
	this.anchor.setTo(0.5);
	game.time.events.loop(Phaser.Timer.SECOND*5, shootBullet, this);
}

function shootBullet(){
	bullet=new Bullet(game, "theBullet");
	bullet.reset(this.body.x,this.body.y);
	if(this.body.x > player.x){
		this.scale.setTo(0.1,0.1);
		if(this.body.x< player.x+250){
			bullet.body.velocity.x=-150;
			game.add.existing(bullet);
		}
	}else{
		this.scale.setTo(-0.1,0.1);
		if(player.x< this.body.x+250){
			bullet.body.velocity.x=150;
			game.add.existing(bullet);
		}
	}
}
function hitBullet(bullet,player){
	bullet.kill();
	widthLife.width = widthLife.width - totalLife/5;
}

EnemyTorrent.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyTorrent.prototype.constructor = EnemyTorrent;

EnemyTorrent.prototype.update = function() {
	game.physics.arcade.overlap(this, player, hitBullet, null, this);
	this.animations.play('enemyT');
} 