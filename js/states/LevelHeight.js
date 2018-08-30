
var checkpoint;
var checkpoint2;
var checkpoint3;
var checkpoint4;
var HeightCheck = 0;
var dead = false;


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
		game.time.events.loop(Phaser.Timer.SECOND, this.cropLife, this);
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
	    aEGrab.y = 3700;
	    aEGrab.x = 450;
	    game.add.existing(aEGrab);

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

    	checkpoint = game.add.sprite(461,3815,'checkpoint');
	    game.physics.arcade.enable(checkpoint);
		checkpoint.enableBody = true;

		checkpoint2 = game.add.sprite(768,2407,'checkpoint');
	    game.physics.arcade.enable(checkpoint2);
		checkpoint2.enableBody = true;

		checkpoint3 = game.add.sprite(503,711,'checkpoint');
	    game.physics.arcade.enable(checkpoint3);
		checkpoint3.enableBody = true;

    	//refer to the example: https://gamemechanicexplorer.com/#lighting-1
		this.LIGHT_RADIUS = 300;

		//create shadow texture
		//var graphics = game.add.graphics(100, 100);
		this.shadowTexture = this.game.add.bitmapData(game.world.width,game.world.height);
		
		//create an object that will use the bitmap as texture

		//var lightSprite = game.add.group();
		//lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
		var lightShadow = game.add.image(0,0,this.shadowTexture);
		lightShadow.blendMode = Phaser.blendModes.MULTIPLY;
		this.lights = this.game.add.group();
		this.lights.add(player);
    	player.LIGHT_RADIUS = 100;

    	

		checkpoint4 = game.add.sprite(475,135,'checkpoint1');
	    game.physics.arcade.enable(checkpoint4);
		checkpoint4.enableBody = true;
		this.lights.add(checkpoint4);

    	//refer to https://codepen.io/jdnichollsc/pen/oXXRMz
		//add total health bar
		bmd = game.add.bitmapData(200, 40);
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 200, 80);
		bmd.ctx.fillStyle = '#A0522D';
		bmd.ctx.fill();
		bglife = game.add.sprite(50, 20, bmd);
    	bglife.anchor.set(0.5);
    	//add current health bar
    	bmd = game.add.bitmapData(180, 30);
    	bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 200, 80);
		bmd.ctx.fillStyle = '#FFF68F';
		bmd.ctx.fill();
		widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
		widthLife.enableBody = true;
    	totalLife = bmd.width;
    	life = game.add.sprite(170- bglife.width/2 + 10, 30, bmd);
    	life.anchor.y = 0.5;
    	life.enableBody = true;
    	life.cropEnabled = true;
    	life.crop(widthLife);
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(170-bglife.width/2 + 10,30);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(170,30);
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

		game.physics.arcade.overlap(player,checkpoint,this.reachCheckpoint,null,this);
		game.physics.arcade.overlap(player,checkpoint2,this.reachCheckpoint2,null,this);
		game.physics.arcade.overlap(player,checkpoint3,this.reachCheckpoint3,null,this);
		//game.physics.arcade.overlap(player,checkpoint4,this.reachCheckpoint4,null,this);

		// allows the player to fall off the map.

		game.physics.arcade.collide(player,layer3);
		this.updateShadowTexture();
		if(player.y >= 3950){
	    	player.body.collideWorldBounds = false;
	    }

	    // kills the player when they fall.
	    if(player.y >= 5000){
	    	widthLife.width = 0;
	    }

	    console.log(player.x,player.y);
	    if(widthLife.width<=0 ){
			widthLife.width = 0;
			dead = true;
			player.animations.stop(null,true);
			//player.body.collideWorldBounds = true;
			this.lights.remove(player);
			player.alpha = 0;
	
			//create a custom timer


			timer = game.time.create();
				//create a event 3s from now
			timeEvent = timer.add(Phaser.Timer.SECOND*3,this.endTimer,this);
			timer.start();


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
	}
},
	reachCheckpoint: function(player,checkpoint){
		console.log("a");
		//TempX = checkpoint.x;
    	//TempY = checkpoint.y;
		HeightCheck = 1;
		widthLife.width = totalLife;
		var saved=new Checkpoint(game,checkpoint.x,checkpoint.y-5,'checkpoint1');
		game.add.existing(saved);

	//saved.enableBody = true;
		checkpoint.kill();
		this.lights.add(saved);
		saved.LIGHT_RADIUS = 50;

	},
	reachCheckpoint2: function(player,checkpoint2){
		console.log("a");
		//TempX = checkpoint2.x;
    	//TempY = checkpoint2.y;
		HeightCheck = 2;
		widthLife.width = totalLife;
		var saved2=new Checkpoint(game,checkpoint2.x,checkpoint2.y-5,'checkpoint1');
		game.add.existing(saved2);

	//saved.enableBody = true;
		checkpoint2.kill();
		this.lights.add(saved2);
		saved2.LIGHT_RADIUS = 50;
		

	},
	reachCheckpoint3: function(player,checkpoint3){
		console.log("a");
		//TempX = checkpoint2.x;
    	//TempY = checkpoint2.y;
		HeightCheck = 3;
		widthLife.width = totalLife;
		var saved3=new Checkpoint(game,checkpoint3.x,checkpoint3.y-5,'checkpoint1');
		game.add.existing(saved3);

	//saved.enableBody = true;
		checkpoint3.kill();
		this.lights.add(saved3);
		saved3.LIGHT_RADIUS = 50;
		

	},
	reachCheckpoint4: function(player,checkpoint4){
		console.log("a");
		//TempX = checkpoint2.x;
    	//TempY = checkpoint2.y;
		HeightCheck = 4;
		widthLife.width = totalLife;
		var saved4=new Checkpoint(game,checkpoint4.x,checkpoint4.y-5,'checkpoint1');
		game.add.existing(saved4);

	//saved.enableBody = true;
		checkpoint4.kill();
		this.lights.add(saved4);
		saved4.LIGHT_RADIUS = 50;
		

	},

	updateShadowTexture:function(){
		this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
		this.shadowTexture.context.fillRect(0,0,game.world.width,game.world.height);
		// this.shadowTexture.context.fillRect(2000,0,2000,1200);
		// this.shadowTexture.context.fillRect(4000,0,2000,1200);
		// this.shadowTexture.context.fillRect(6000,0,2000,1200);

		

    	// Iterate through each of the lights and draw the glow
    	this.lights.forEach(function(m) {
    		if(m == player){
    			//Randomly change the radius each frame
        		playerRadius = this.LIGHT_RADIUS + this.game.rnd.integerInRange(1,10);

        		// Draw circle of light with a soft edge
        		var gradient =this.shadowTexture.context.createRadialGradient(m.x, m.y,this.LIGHT_RADIUS * 0.75,m.x, m.y, playerRadius);
        		gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        		gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        		this.shadowTexture.context.beginPath();
        		this.shadowTexture.context.fillStyle = gradient;
        		this.shadowTexture.context.arc(m.x, m.y, playerRadius, 0, Math.PI*2);
        		this.shadowTexture.context.fill();
        		
       	 	}
    
        else{
        	// Randomly change the radius each frame
        	checkpointRadius = 100 + this.game.rnd.integerInRange(1,10);

        	// Draw circle of light with a soft edge
        	var gradient =this.shadowTexture.context.createRadialGradient(m.x, m.y,100 * 0.75,m.x, m.y, checkpointRadius);
        	gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        	gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        	this.shadowTexture.context.beginPath();
        	this.shadowTexture.context.fillStyle = gradient;
        	this.shadowTexture.context.arc(m.x, m.y, checkpointRadius, 0, Math.PI*2);
        	this.shadowTexture.context.fill();

        }
    }, this);

    // This just tells the engine it should update the texture cache
    this.shadowTexture.dirty = true;
    

	},
	endTimer:function(){
		timer.stop();
		if(dead == true){
		//player.body.collideWorldBounds = true;
		timer.stop();
		widthLife.width = totalLife;
		counter--;
		player.alpha = 1;
		player.facing = 'right';
		this.lights.add(player);

		if(HeightCheck == 0){
			player.body.gravity.y=2250;
    		player.x = 450;
    		player.y = 3800;
    	}else if(HeightCheck == 1){
    		player.x = checkpoint.x;
    		player.y = checkpoint.y - 50;
    		player.body.gravity.y=2250;
    	}else if(HeightCheck == 2){
    		player.x = checkpoint2.x;
    		player.y = checkpoint2.y - 50;
    		player.body.gravity.y=2250;
    	}else if(HeightCheck == 3){
    		player.x = checkpoint3.x;
    		player.y = checkpoint3.y - 50;
    		player.body.gravity.y=2250;
    	}else if(HeightCheck == 4){
    		player.x = checkpoint4.x;
    		player.y = checkpoint4.y - 50;
    		player.body.gravity.y=2250;
    	}

	}
		dead = false;
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
	cropLife:function(){
		if(widthLife.width > 0){
			game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /30)) }, 0.1, Phaser.Easing.Linear.None, true);
		}
	},

	/**
	 * Development function used to debug the game.
	 */
	render: function() {
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");
	}
};