var LevelCrowd = function(game) {};
LevelCrowd.prototype = {
	create: function() {
		game.world.setBounds(0, 0, 8000, 1000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		var sky = game.add.sprite(-100, 0, 'sky');
	   	sky.scale.setTo(1.5, 1);
	   	player = new Player(game,'player');
	    player.x=0;
	    player.y=250;
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);
    	platforms = game.add.group();
	    platforms.enableBody = true;
	    var land = platforms.create(-2500, 950, 'ground');
	    land.scale.setTo(10, 0.1);
	    land.body.immovable = true;
	},

	update: function() {

		//var hitPlatform = game.physics.arcade.collide(this, platforms);
    	//cursors = game.input.keyboard.createCursorKeys();
		/*if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("Level1State");
		}*/

	}
};