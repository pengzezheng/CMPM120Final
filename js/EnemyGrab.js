function EnemyGrab(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(1);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.gravity.y=0;// make it stay in the air

}

function grab(explosion, player){//kill enemy and increase gravity of player
		player.body.gravity.y +=100;// make player heavier
		this.kill();//kill it
		EAtt.play();// sound effect
	}

EnemyGrab.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyGrab.prototype.constructor = EnemyGrab;

EnemyGrab.prototype.update = function() {
	game.physics.arcade.overlap(this, player, grab, null, this);//enable overlapping
	if(this.body.x > player.x){// reset scale if player is moving
		this.scale.setTo(1,1);
	}else{
		this.scale.setTo(-1,1);
	}
}