function Bomb(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;//set body
	this.body.gravity.y=200;
	count=0;
	this.animations.add('bom1', [0, 1, 2, 3], 10, true);// give animation to Bombs
	explSound.allowMultiple = true;
}

function explo(bomb, player){//function to make explosion from bombs
	explosion=new Explosion(game, "ex");// call prefab
	explosion.reset(this.body.x,this.body.y);//reset position
	game.add.existing(explosion);//add it into game
	explSound.play();// sound effect
	this.kill();//kill bomb
	}

Bomb.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bomb.prototype.constructor = Bomb;

Bomb.prototype.update = function() {
	game.physics.arcade.collide(this,platforms);//collsion check
	this.animations.play('bom1');//animation playing
	if(count <2){//debugging sound
	 	game.time.events.add(Phaser.Timer.SECOND * 2, explo, this);
	 	count++;
	}
}	