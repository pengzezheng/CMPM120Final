
var fireButton;
var bglife;
var widthLife;
var totalLife;
var life;
var fireSound;
var decreasingLight;

var bmd;
function Player(game,key,x,y){
	Phaser.Sprite.call(this, game, x, y, key);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.velocity.x = 0;
	this.scale.setTo(0.35);
	this.body.collideWorldBounds = true;
	this.anchor.setTo(0.6,0.6);
	this.body.gravity.y=2250;
	//add stand and walk animations
	this.animations.add('left',[0,1,2,3,4,5],10,true);
	this.animations.add('leftIdle',[6,7,8,9,10],10,true);
	this.animations.add('right',[16,17,18,19,20,21],10,true);
	this.animations.add('rightIdle',[11,12,13,14,15],10,true);
	//make the player face the direction they walk to
	this.facing = 'left';
	
	//set bounding box for player
    this.body.setSize(60, 90, 30, 35);
    this.anchor.setTo(0.5,0.5);

    
	
}
//explicitly define prefab's prototype(Phaser.Sprite) and constructor(Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
	
		
		
	
Player.prototype.update = function(){
    cursors = game.input.keyboard.createCursorKeys();
	this.body.velocity.x=0;
	if(cursors.up.justDown&&this.body.onFloor()){
		this.body.velocity.y=-850;
			
	}
		


	if(cursors.left.isDown){//if the player chooses to move to the left
	//Move to the left
		this.body.velocity.x=-300;
		this.animations.play('left');
		//make the player face the direction they walk to
		if(this.facing != 'left'){
			
			this.facing = 'left';
			//this.scale.x = -0.05;
		}
	}
			
		
		
		


	else if(cursors.right.isDown){//if the player chooses to move to the left
		//Move to the left
		this.body.velocity.x=300;
		this.animations.play('right');
		//make the player face the direction they walk to
			if(this.facing != 'right'){
			
				this.facing = 'right';
				
			}
	}
	else if(this.facing == 'left'){
		this.animations.play('leftIdle');

	}
	else if(this.facing == 'right'){
		this.animations.play('rightIdle');
				
	}
	
			
		
		
	else{
		//Stand still
			
		if(this.facing != 'idle'){
			this.animations.stop();
			if(this.facing == 'left'){
					this.frame = 6;
			}
			else if(this.facing == 'right'){
				this.frame = 15;
			}
		}
	}
		
	life.updateCrop();
		
		
		
}

