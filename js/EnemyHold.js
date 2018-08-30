function EnemyHold(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.25);
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	this.body.immovable=true;
	this.temp=0;//variable to debug sound
}

function holding(enemyHold,player){//freeze player 2 seconds
	player.body.velocity.x=0;//make x and y velocity as 0
	player.body.velocity.y=0;
	game.time.events.add(Phaser.Timer.SECOND*2, doneHold, this);// after 2 seconds, call another function
}

function doneHold(enemyHold,player){//finish holding
	this.kill();//kill the monster
	this.temp=0;// reset temp;
}

EnemyHold.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyHold.prototype.constructor = EnemyHold;

EnemyHold.prototype.update = function() {
	game.physics.arcade.overlap(this, player, holding, null, this);//enable overlapping
	var t=game.physics.arcade.collide(this,player);//check whether collision works
	if (t==true&&this.temp==0){// debug sound to make sure it wont play hundred times.
		Chewing.play();
		this.temp=1;
	}
} 