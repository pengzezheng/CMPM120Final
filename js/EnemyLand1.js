function EnemyLand1(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.25);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	//this.body.gravity.y=100;
	this.animations.add('ELand', [0, 1, 2], 10, true);
	this.anchor.setTo(0.6);
	this.body.gravity.y=10000;
	this.body.setSize(100, 200, 16, 16);
	Died.allowMultiple=true;
	counter=0;
}

function rush(enemyLand1, player){//kill enemy and do damage to player
	hit=1;
	enemyLand1.kill();
	widthLife.width = widthLife.width - totalLife/4;
	hit=0;
	}

EnemyLand1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyLand1.prototype.constructor = EnemyLand1;

EnemyLand1.prototype.update = function() {
	game.physics.arcade.collide(this,layer1);
	var hurt=game.physics.arcade.overlap(this, player, rush, null, this);
	//game.physics.arcade.overlap(this, weapon.bullets, hitEnemyLand, null, this);
	this.animations.play('ELand');

	if(hurt==true){ 
		Died.play();
	}
	if(this.body.x > player.x){
		if(this.body.x< player.x+250){
			game.physics.arcade.moveToObject(this,player);
			this.scale.setTo(0.25,0.25);
		}
	}else{
		if(player.x< this.body.x+250){
			game.physics.arcade.moveToObject(this,player);
			this.scale.setTo(-0.25,0.25);
		}
	}
} 