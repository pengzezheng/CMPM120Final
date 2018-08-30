function EnemyLand1(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.25);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.animations.add('ELand', [0, 1, 2], 10, true);//add animation
	this.anchor.setTo(0.6);
	this.body.gravity.y=10000;//set gravity to make sure it wont fly
	this.body.setSize(100, 200, 16, 16);//reset bounding box
	Died.allowMultiple=true;//sound effect modifiction
	counter=0;
}

function rush(enemyLand1, player){//kill enemy and do damage to player
	hit=1;//debug to make sure the rush works
	enemyLand1.kill();// kill it
	widthLife.width = widthLife.width - totalLife/4;//do damage
	hit=0;//reset the debugging
	}

EnemyLand1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyLand1.prototype.constructor = EnemyLand1;

EnemyLand1.prototype.update = function() {
	game.physics.arcade.collide(this,layer1);
	var hurt=game.physics.arcade.overlap(this, player, rush, null, this);//check overlap
	this.animations.play('ELand');//play animation

	if(hurt==true){ //play sound
		Died.play();
	}
	if(this.body.x > player.x){// make sure the enemy is chasing player
		if(this.body.x< player.x+250){
			game.physics.arcade.moveToObject(this,player);
			this.scale.setTo(0.25,0.25);
		}
	}else{
		if(player.x< this.body.x+250){//reset direction and chasing 
			game.physics.arcade.moveToObject(this,player);
			this.scale.setTo(-0.25,0.25);
		}
	}
} 