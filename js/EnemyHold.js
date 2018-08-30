function EnemyHold(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.25);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	this.body.immovable=true;
	//timer=game.time.create();
	this.temp=0;
}

function holding(enemyHold,player){
	player.body.velocity.x=0;
	player.body.velocity.y=0;
	game.time.events.add(Phaser.Timer.SECOND*2, doneHold, this);
}

function doneHold(enemyHold,player){
	this.kill();
	this.temp=0;
}

EnemyHold.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyHold.prototype.constructor = EnemyHold;

EnemyHold.prototype.update = function() {
	game.physics.arcade.overlap(this, player, holding, null, this);
	var t=game.physics.arcade.collide(this,player);
	if (t==true&&this.temp==0){
		Chewing.play();
		this.temp=1;
	}
} 