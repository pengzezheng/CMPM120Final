var LevelHeight = function(game) {};
LevelHeight.prototype = {
	create: function() {
		game.time.advancedTiming = true;
		var sky = game.add.sprite(-100, 0, 'bg1');
	   	sky.scale.setTo(1.1, 1);
		game.world.setBounds(0, 0, 960, 4000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		map=game.add.tilemap('levelHeight');
	   	map.addTilesetImage('level 1 tilemap', 'tileset1', 32, 32);
	   	layer3=map.createLayer('layer3');
	   	var a =game.add.existing(layer3);
	   	a.debug=true;

	   	map.setCollisionByExclusion([], true, 'layer3', true);

	   	player = new Player(game,'player',450,3900);
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);

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
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);
	},

	update: function() {
		game.physics.arcade.collide(player,layer3);
	},

	render: function(){
		// game.debug.body(spring, false);
		//game.debug.body(aELand, "#00ff00", true);
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");

	}
};