var player;
var Player = function(game);
//explicitly define prefab's prototype(Phaser.Sprite) and constructor(Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype = {
	preload:function(){
		game.load.spritesheet('player','assets/character.png');
		game.load.image('fire','assets/fire.png');
	},
	create:function(){
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
	update:function(){
		//set the player's velocity
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

		if(cursors.up.isDown&&player.body.touching.down){
			player.body.velocity.y=-350;
			player.animations.play('up');
		}
		if(cursors.left.isDown){//if the player chooses to move to the left
		//Move to the left
		player.body.velocity.x=-150;
		player.animations.play('left');
		}
		else if(cursors.right.isDown){//if the player chooses to move to the right
		//Move to the right
		player.body.velocity.x=150;
		player.animations.play('right');
		}
		else{
		//Stand still
		player.animations.stop();
		player.frame=1;
		}

		if(fireButton.isDown){
			weapons.fire();
		
		
		}

		
	},
	updateShadowTexture:function(){
	//create dark texture
	this.shadowTexture.context.fillStyle = 'rgb(100,100,100)';
	this.shadowTexture.context.fillRect(0,0,game.world.width,game.world.height);

	//draw the circle of light
	this.shadowTexture.context.beginPath();
	this.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	this.shadowTexture.context.arc(boy.x,boy.y,this.LIGHT_RADIUS,0,Math.PI*2);
	this.shadowTexture.context.fill();

	//tell the engine it should update the texture
	this.shadowTexture.dirty = true;
}
