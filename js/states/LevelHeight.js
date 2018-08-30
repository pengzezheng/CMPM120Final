
var counter=5;

/**
 * This is the height level which is the first level of the game.
 * @param loads the Phaser game framework.
 */
var LevelHeight = function(game) {};
LevelHeight.prototype = {
	
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 */
	create: function() {
		EAtt=game.add.audio('EA');
		//Died=game.add.audio('Die');
		explSound=game.add.audio('EXPLO', 0.25);
		EAtt.allowMultiple=true;
		//Died.allowMultiple=true;
		// game.camera(800,600);
	    //  We're going to be using physics, so enable the Arcade Physics system
	    BGM1=new Phaser.Sound(game,'BGM1',1,true);
	    BGM1.allowMultiple=true;
	    BGM1.play();

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
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (26 * 32);
	    aEGrab.y = (98 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (21 * 32);
	    aEGrab.y = (91 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (20 * 32);
	    aEGrab.y = (81 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (8 * 32);
	    aEGrab.y = (72 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (27 * 32);
	    aEGrab.y = (66 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (7 * 32);
	    aEGrab.y = (63 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (22 * 32);
	    aEGrab.y = (57 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (8 * 32);
	    aEGrab.y = (55 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (22 * 32);
	    aEGrab.y = (51 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (16 * 32);
	    aEGrab.y = (50 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (6 * 32);
	    aEGrab.y = (48 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (22 * 32);
	    aEGrab.y = (47 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (19 * 32);
	    aEGrab.y = (42 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (14 * 32);
	    aEGrab.y = (115 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (2 * 32);
	    aEGrab.y = (41 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (23 * 32);
	    aEGrab.y = (40 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (22 * 32);
	    aEGrab.y = (39 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (14 * 32);
	    aEGrab.y = (37 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (5 * 32);
	    aEGrab.y = (31 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (17 * 32);
	    aEGrab.y = (25 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (12 * 32);
	    aEGrab.y = (20 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (19 * 32);
	    aEGrab.y = (16 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (10 * 32);
	    aEGrab.y = (13 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (17 * 32);
	    aEGrab.y = (10 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (21 * 32);
	    aEGrab.y = (9 * 32);
	    game.add.existing(aEGrab);
	    aEGrab =new EnemyGrab(game,'star');
	    aEGrab.x = (5 * 32);
	    aEGrab.y = (5 * 32);
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
    	game.time.events.loop(Phaser.Timer.SECOND*3, this.createBombs, this);

    	lives=game.add.group();
    	lives.fixedToCamera = true;
    	lives.cameraOffset.setTo(50,50);
    	l1 = lives.create(15, 12.5, 'lives');//create sprite life
		l1.scale.setTo(0.075);//set scale
		l2 = lives.create(35, 12.5, 'lives'); //create sprite life
		l2.scale.setTo(0.075);//set scale
		l3 = lives.create(55, 12.5, 'lives');//create sprite life
		l3.scale.setTo(0.075);//set scale
		l4 = lives.create(75, 12.5, 'lives');//create sprite life
		l4.scale.setTo(0.075);
		l5 = lives.create(95, 12.5, 'lives');//create sprite life
		l5.scale.setTo(0.075);
	},

	/**
	 * The update function make changes in the game screen when conditions are met.
	 */
	update: function() {
		// allows the player to fall off the map.
		game.physics.arcade.collide(player,layer3);
		if(player.y >= 3950){
	    	player.body.collideWorldBounds = false;
	    }

	    // kills the player when they fall.
	    if(player.y >= 5000){
	    	widthLife.width = 0;
	    }

	    if(counter==4){
			l5.destroy();
		}
		if(counter==3){
			l4.destroy();
		}
		if(counter==2){
			l3.destroy();
		}
		if(counter==1){
			l2.destroy();
		}
		if(counter==0){
			l1.destroy();
			//BGM1.stop();
		}
	},

	/**
	 * The createBombs function uses the Bomb prefab to create the bombs in the game world.
	 */
	createBombs: function() {
		bomb=new Bomb(game, "bom");
		bomb.reset(game.rnd.integerInRange(100,900),player.y-600);
		bomb.scale.setTo(1.5);
		game.add.existing(bomb);
	},

	/**
	 * Development function used to debug the game.
	 */
	render: function() {
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");
	}
};