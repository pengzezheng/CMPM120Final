function EnemyFly1(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.5);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	this.body.velocity.x = -250;
	reloading=false;
	this.body.setSize(100,50,50,25);
}

EnemyFly1.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyFly1.prototype.constructor = EnemyFly1;

EnemyFly1.prototype.update = function() {
	if(this.body.x>=player.x +100 &&this.body.x<=player.x +102 &&reloading==false){
		bomb=new Bomb(game, "bom");
		bomb.reset(this.body.x,this.body.y);
		bomb.scale.setTo(1.5);
		game.add.existing(bomb);
		reloading=true;
	}

	if (this.body.x <= player.x -100 && this.body.x>=player.x-102&&reloading==true){
		reloading=false;
	}
	game.world.wrap(this, 0, true);
}