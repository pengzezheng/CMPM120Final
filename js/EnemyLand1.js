function EnemyLand1(game, key){
	Phaser.Sprite.call(this, game, 400, 500, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	//this.body.gravity.y=100;
	this.animations.add('ELand', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);

}

function rush(enemyLand1, player){//kill enemy and do damage to player
		hit=1;
		enemyLand1.kill();
		widthLife.width = widthLife.width - totalLife/4;
		hit=0;

	}
function hitEnemyLand(enemyLand1,bullet){
	enemyLand1.kill();
	bullet.kill();
}

EnemyLand1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyLand1.prototype.constructor = EnemyLand1;

EnemyLand1.prototype.update = function() {
	game.physics.arcade.collide(this,platforms);
	game.physics.arcade.overlap(this, player, rush, null, this);
	game.physics.arcade.overlap(this, weapon.bullets, hitEnemyLand, null, this);
	this.animations.play('ELand');
	if(this.body.x > player.x){
		if(this.body.x< player.x+250){
			game.physics.arcade.moveToObject(this,player);
		}
	}else{
		if(player.x< this.body.x+250){
			game.physics.arcade.moveToObject(this,player);
		}
	}
} 