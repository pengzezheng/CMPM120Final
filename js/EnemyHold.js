function EnemyHold(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.25);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	//timer=game.time.create();
	temp=0;
}

function holding(enemyHold,player){
	player.body.velocity.x=0;
	player.body.velocity.y=0;
	game.time.events.add(Phaser.Timer.SECOND*2, doneHold, this);
}

function doneHold(enemyHold,player){
	this.kill();
}

EnemyHold.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyHold.prototype.constructor = EnemyHold;

EnemyHold.prototype.update = function() {
	var t=game.physics.arcade.overlap(this, player, holding, null, this);
} 