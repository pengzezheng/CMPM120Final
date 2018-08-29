function EnemyGrab(game, key){
	Phaser.Sprite.call(this, game, 400, 85, key);// call phaser sprite
	this.scale.setTo(1);
	game.physics.enable(this);//enable physics
	this.enableBody=true;
	//this.body.x = game.rnd.integerInRange(150,3800);
	this.count=0;
	this.body.gravity.y=0;
}

function grab(explosion, player){//kill enemy and do damage to player
		player.body.gravity.y +=100;
		this.kill();
	}
//player could kill the enemy who would grab the candle man
function hitEnemyGrab(EnemyGrab,bullet){
	EnemyGrab.kill();
	bullet.kill();
}

EnemyGrab.prototype = Object.create(Phaser.Sprite.prototype);// make prototype
EnemyGrab.prototype.constructor = EnemyGrab;

EnemyGrab.prototype.update = function() {
	game.physics.arcade.overlap(this, player, grab, null, this);
	game.physics.arcade.overlap(this, weapon.bullets, hitEnemyGrab, null, this);
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