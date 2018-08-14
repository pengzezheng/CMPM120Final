function Bomb(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	game.physics.enable(this, Phaser.Physics.ARCADE);//enable physics
	this.enableBody=true;
	this.body.gravity.y=400;
	count=0;
	this.animations.add('bom1', [0, 1, 2, 3], 10, true);
}

function explo(bomb, player){//kill bullet and do damage
	explosion=new Explosion(game, "ex");
	explosion.reset(this.body.x,this.body.y);
	game.add.existing(explosion);
	explSound.play();
	this.kill();
		//bgm.play();//make sounds
	}

Bomb.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
Bomb.prototype.constructor = Bomb;

Bomb.prototype.update = function() {
	game.physics.arcade.collide(this,platforms);
	this.animations.play('bom1');
	if(count <2){

	 	game.time.events.add(Phaser.Timer.SECOND * 2, explo, this);


	 	count++;
	}
}	