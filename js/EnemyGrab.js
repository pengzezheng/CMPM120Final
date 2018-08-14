function EnemyGrab(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(0.08);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	//this.body.x = game.rnd.integerInRange(150,3800);
	this.count=0;
	this.body.gravity.y=0;
}

function grab(explosion, player){//kill enemy and do damage to player
		player.body.gravity.y +=200;
		EAtt.play();
		this.kill();
	}

EnemyGrab.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyGrab.prototype.constructor = EnemyGrab;

EnemyGrab.prototype.update = function() {
	game.physics.arcade.overlap(this, player, grab, null, this);
	/*if(this.count < 100) {
				if(this.count < 90) {
					this.scale.setTo(0.1, 0.1+this.count*0.1);
				}
				this.count++;
		}
		//kill it 
		/*else {
				this.kill();
		}*/
}