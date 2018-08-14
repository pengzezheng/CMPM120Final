var weapon;
var fireButton;
var bglife;
var widthLife;
var totalLife;
var life;
var fireSound;
//var count = 0;
var bmd;
function Player(game,key){
	Phaser.Sprite.call(this,game,80,908,key,'stand');
	game.physics.enable(this);
	this.enableBody = true;
	this.body.velocity.x = 0;
	this.scale.setTo(0.05,0.05);
	this.body.collideWorldBounds = true;
	this.anchor.setTo(0.5,0.5);
	this.body.gravity.y=1900;
	this.animations.add('right',[1,2],10,true);
	this.animations.add('left',[0,4],10,true);
	//make the player face the direction they walk to
	this.facing = 'left';
	//this.body.setSize(18,36,18,15);

	//this.animations.add('up',[8],10,true);
	//this.animations.add('rightAttack',[6],10,true);
	//this.animations.add('leftAttack',[7],10,true);
	//give candleman a small range of light
	//refer to the example: https://gamemechanicexplorer.com/#lighting-1
	this.LIGHT_RADIUS = 300;
	//create shadow texture
	this.shadowTexture = this.game.add.bitmapData(this.game.world.width,this.game.world.height);
	//create an object that will use the bitmap as texture
	var light = this.game.add.image(0,0,this.shadowTexture);
	//dark everything below the light
	light.blendMode = Phaser.blendModes.MULTIPLY;
	//create health bar
	//refer to https://codepen.io/jdnichollsc/pen/oXXRMz
	//add total health bar
	bmd = game.add.bitmapData(200, 40);
	bmd.ctx.beginPath();
	bmd.ctx.rect(0, 0, 200, 80);
	bmd.ctx.fillStyle = '#00685e';
	bmd.ctx.fill();
	bglife = game.add.sprite(630, 50, bmd);
    bglife.anchor.set(0.5);
    //add current health bar
    bmd = game.add.bitmapData(180, 30);
    bmd.ctx.beginPath();
	bmd.ctx.rect(0, 0, 200, 80);
	bmd.ctx.fillStyle = '#00f910';
	bmd.ctx.fill();
	widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
    totalLife = bmd.width;
    life = game.add.sprite(630- bglife.width/2 + 10, 50, bmd);
    life.anchor.y = 0.5;
    life.cropEnabled = true;
    life.crop(widthLife);

    //game.time.events.loop(Phaser.Timer.SECOND, this.cropLife, this);

    weapon = game.add.weapon(30,'fire');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 100;
    weapon.trackSprite(this,0,0,true);

    //add sound for fire weapon
    fireSound = game.sound.add('fireSound');
	fireSound.allowMultiple = true;
    
    
	
}
//explicitly define prefab's prototype(Phaser.Sprite) and constructor(Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
	
		//Phaser.Sprite.call(this,game,50,50,key);
		/*character = game.add.sprite(50,50,'player','adventurer_stand');
		game.physics.enable(character);
		character.enableBody = true;
		character.body.velocity.x = 0;
		character.body.velocity.y = 0;
		character.body.collideWorldBounds = true;
		character.anchor.setTo(0.5,0.5);*/
		//add animations to the player
		/*this.animation.add('right',[2,3],10,true);
		this.animation.add('left',[4,5],10,true);
		this.animation.add('up',[8],10,true);
		this.animation.add('rightAttack',[6],10,true);
		this.animation.add('leftAttack',[7],10,true);*/
		//give character a small range of light
		//refer to the example: https://gamemechanicexplorer.com/#lighting-1
		/*this.LIGHT_RADIUS = 100;
		//create shadow texture
		this.shadowTexture = this.game.add.bitmapData(this.game.world.width,this.game.world.height);
		//create an object that will use the bitmap as texture
		var light = this.game.add.image(0,0,this.shadowTexture);
		//dark everything below the light
		light.blendMode = Phaser.blendModes.MULTIPLY;*/
		
	
Player.prototype.update = function(){
		//this.updateShadowTexture();
		game.physics.arcade.collide(this,platforms);
    	var hitPlatform = game.physics.arcade.collide(this, platforms);
    	cursors = game.input.keyboard.createCursorKeys();

		//fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.body.velocity.x=0;

		//if(ifRestart ==0){
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
		else if(cursors.right.isDown){//if the player chooses to move to the right
		//Move to the right
			this.animations.play('right');
			this.body.velocity.x=300;
			if(this.facing != 'right'){
			
				this.facing = 'right';
			//this.scale.x = 0.05;
			}
		}
		
		else{
		//Stand still
			//this.animations.stop();
			if(this.facing != 'idle'){
				this.animations.stop();
				if(this.facing == 'left'){
					this.frame = 0;
				}
				else{
					this.frame = 1;
				}
				//this.facing = 'idle';

		//this.body.velocity.x = 0;
		//this.body.velocity.y = 0;

			//this.frame=3;
			}
		}
		if(cursors.up.isDown&&this.body.touching.down){
			this.body.velocity.y=-900;
			//this.animations.play('up');
			//console.log('jump');
		}
	

		
		//make light works
		
	   if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
	   		fireSound.play();
	   		if(this.facing == 'left'){
	   			weapon.bulletSpeed = -600;
				weapon.fire();
				widthLife.width -= totalLife/10;
			}
		
		
			else if(this.facing == 'right'){
	   			weapon.bulletSpeed =600;
				weapon.fire();
				widthLife.width -= totalLife/10;
		
		
			}
		//}
	}
		this.updateShadowTexture();
		life.updateCrop();
	
	}
Player.prototype.updateShadowTexture = function(){
	//create dark texture
		this.shadowTexture.context.fillStyle = 'rgb(0,0,0)';
		this.shadowTexture.context.fillRect(0,0,game.world.width,game.world.height);

		//draw the circle of light
		this.shadowTexture.context.beginPath();
		this.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
		this.shadowTexture.context.arc(this.x,this.y,this.LIGHT_RADIUS,0,Math.PI*2);
		this.shadowTexture.context.fill();

		//tell the engine it should update the texture
		this.shadowTexture.dirty = true;
}
/*Player.prototype.cropLife = function(){
	if(widthLife.width > 0&&count == 0){
		game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /100)) }, 200, Phaser.Easing.Linear.None, true);
	}
}*/
	/*updateShadowTexture:function(){
		//create dark texture
		this.shadowTexture.context.fillStyle = 'rgb(100,100,100)';
		this.shadowTexture.context.fillRect(0,0,game.world.width,game.world.height);

		//draw the circle of light
		this.shadowTexture.context.beginPath();
		this.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
		this.shadowTexture.context.arc(this.x,this.y,this.LIGHT_RADIUS,0,Math.PI*2);
		this.shadowTexture.context.fill();

		//tell the engine it should update the texture
		this.shadowTexture.dirty = true;
	},

	
};*/


/*Player.prototype.update = function(){
	preload:function(){
		game.load.spritesheet('player','assets/character.png');
		game.load.image('weapons','assets/fire.png');
	},
	/*create:function(){
		player = game.add.sprite(50,0,'player','adventurer_stand');
		game.physics.enable(player);
		player.body.collideWorldBounds = true;
		player.anchor.setTo(0.5,0.5);
		//add animations to the player
		player.animation.add('right',[2,3],10,true);
		player.animation.add('left',[4,5],10,true);
		player.animation.add('up',[8],10,true);
		player.animation.add('rightAttack',[6],10,true);
		player.animation.add('leftAttack',[7],10,true);
		//give character a small range of light
		//refer to the example: https://gamemechanicexplorer.com/#lighting-1
		this.LIGHT_RADIUS = 100;
		//create shadow texture
		this.shadowTexture = this.game.add.bitmapData(this.game.world.width,this.game.world.height);
		//create an object that will use the bitmap as texture
		var light = this.game.add.image(0,0,this.shadowTexture);
		//dark everything below the light
		light.blendMode = Phaser.blendModes.MULTIPLY;

		weapons = game.add.weapon(30,'fire');
		weapons.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		weapons.bulletSpeed = 600;
		weapons.fireRate = 100;
		weapons.trackSprite(player,0,0,true);
		cursors = this.input.keyboard.createCursorKeys();
		fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


	},
	
	
	//make light works
	this.updateShadowTexture();

	if(cursors.up.isDown&&character.body.touching.down){
		character.body.velocity.y=-350;
		//this.animations.play('up');
	}
	if(cursors.left.isDown){//if the player chooses to move to the left
		//Move to the left
		character.body.velocity.x=-150;
		//this.animations.play('left');
	}
	else if(cursors.right.isDown){//if the player chooses to move to the right
	//Move to the right
		character.body.velocity.x=150;
		//this.animations.play('right');
	}
	else{
		//Stand still
		//this.animations.stop();
		character.frame=1;
	}

	if(fireButton.isDown){
		weapons.fire();
		
		
	}
		
},
Player.prototype.updateShadowTexture = function(){
	
	//create dark texture
	this.shadowTexture.context.fillStyle = 'rgb(100,100,100)';
	this.shadowTexture.context.fillRect(0,0,game.world.width,game.world.height);

	//draw the circle of light
	this.shadowTexture.context.beginPath();
	this.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	this.shadowTexture.context.arc(this.x,this.y,this.LIGHT_RADIUS,0,Math.PI*2);
	this.shadowTexture.context.fill();

	//tell the engine it should update the texture
	this.shadowTexture.dirty = true;
	
};*/
