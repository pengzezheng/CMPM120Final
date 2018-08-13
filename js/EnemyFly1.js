function EnemyFly1(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.velocity.x = -50;
	reloading=false;
	this.body.setSize(100,50,50,25);
}

EnemyFly1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyFly1.prototype.constructor = EnemyFly1;

EnemyFly1.prototype.update = function() {
	if(this.body.x>=player.x +100 &&this.body.x<=player.x +102 &&reloading==false){
		bomb=new Bomb(game, "diamond");
		bomb.reset(this.body.x,this.body.y);
		game.add.existing(bomb);
		reloading=true;
	}

	if (this.body.x <= player.x -100 && this.body.x>=player.x-102&&reloading==true){
		reloading=false;
	}
}