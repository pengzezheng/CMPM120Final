function EnemyFly1(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.velocity.x = -50;
}

EnemyFly1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyFly1.prototype.constructor = EnemyFly1;

EnemyFly1.prototype.update = function() {
	if(this.body.x==player.x){
		bomb=new Bomb(game, "bombA");
		bomb.body.x=this.x;
		bomb.body.y=this.y;
		game.add.existing(bomb);
	}
}