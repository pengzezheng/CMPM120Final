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

	   	aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (14 * 32);
	    aEGrab.y = (115 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (22 * 32);
	    aEGrab.y = (115 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (10 * 32);
	    aEGrab.y = (111 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (27 * 32);
	    aEGrab.y = (110 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (14 * 32);
	    aEGrab.y = (103 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (4 * 32);
	    aEGrab.y = (99 * 32);
	    game.add.existing(aEGrab);

	   	player = new Player(game,'player',450,3900);
	   	player.body.gravity.y=1750;
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
    	game.time.events.loop(Phaser.Timer.SECOND, this.createBombs, this);

    	/*ives=game.add.group();//make a group for life
		l1 = lives.create(75, 12.5, 'lives');//create sprite life
		l1.scale.setTo(0.5);//set scale
		l2 = lives.create(105, 12.5, 'lives'); //create sprite life
		l2.scale.setTo(0.5);//set scale
		l3 = lives.create(135, 12.5, 'lives');//create sprite life
		l3.scale.setTo(0.5);*/
	},

	update: function() {
		game.physics.arcade.collide(player,layer3);
		if(player.y >= 3950){
	    	player.body.collideWorldBounds = false;
	    }

	    if(player.y >= 5000){
	    	widthLife.width = 0;
	    }
	},

	createBombs: function() {
		bomb=new Bomb(game, "bom");
		bomb.reset(game.rnd.integerInRange(100,900),player.y-600);
		bomb.scale.setTo(1.5);
		game.add.existing(bomb);
	},

	render: function(){
		// game.debug.body(spring, false);
		//game.debug.body(aELand, "#00ff00", true);
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");

	}
};