var layer1;
var checkpoint;
var checkpoint2;
var checkpoint3;
var checkpoint4;
var CrowdCheck = 0;
var dead = false;
var countero=5;
var healthFire;
/**
 * This is the hole level which is the third level of the game.
 * @param loads the Phaser game framework.
 */
var LevelHole = function(game) {};
LevelHole.prototype = {
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 */
	create: function() {
		var sky = game.add.sprite(-100, 0, 'bg3');
	   	sky.scale.setTo(1.05, 1);
	   	Chewing=game.add.audio('chewing');
		Chewing.allowMultiple=true;
		Ignite=game.add.audio('ignite');
		Ignite.allowMultiple=true;
		
		Monster=game.add.audio('monster', 0.1);
		Monster.allowMultiple=true;

		BGM3=new Phaser.Sound(game,'lvl3bgm', 1,true);
	    BGM3.allowMultiple=true;
	    BGM3.play();
		game.world.setBounds(0, 0, 4000, 960);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.time.advancedTiming = true;
		map=game.add.tilemap('levelholebg');
	   	map.addTilesetImage('level3', 'tileset3', 32, 32);
	   	layer2=map.createLayer('layer2');
	   	game.add.existing(layer2);
	   	map.setCollisionByExclusion([], true, 'layer2', true);
	   	game.time.events.loop(Phaser.Timer.SECOND, this.cropLife, this);

	   	// constructs obstacles that are placed in specific coordinates of the map.
	   	aEHold = new EnemyHold(game,'mouthOpen');
	   	// adds the existing obstacle object.
	    game.add.existing(aEHold);
	    // specifies the x coordinate.
	    aEHold.x = 200;
	    // specifies the y coordinate.
	    aEHold.y = 725;
	    // constructs more of the above objext.
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (14 * 32);
	    aEHold.y = (22 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (21 * 32);
	    aEHold.y = (26 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (26 * 32);
	    aEHold.y = (22 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (34 * 32);
	    aEHold.y = (18 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (37 * 32);
	    aEHold.y = (26 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (42 * 32);
	    aEHold.y = (26 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (44 * 32);
	    aEHold.y = (20 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (47 * 32);
	    aEHold.y = (25 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (64 * 32);
	    aEHold.y = (19 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (105 * 32);
	    aEHold.y = (18 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (109 * 32);
	    aEHold.y = (17 * 32) + 24;
	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = (48 * 32);
	    aEHold.y = (4 * 32) + 24;
	    // this loop does the same as the above but generates obstacles at a specific area.
	    for(var i = 0; i < 60; i++) {
	    	if(i % 4 == 0) {
	    		aEHold = new EnemyHold(game,'mouthOpen');
		    	game.add.existing(aEHold);
		    	aEHold.x = (53 * 32) + (i * 32);
		    	aEHold.y = (4 * 32) + 24;
	    	}
	    }

	   	// constructs strong enemies that are placed in specific areas of the map.
	   	aEDark = new EnemyDark(game,'enemyDark');
	   	// adds the existing enemy object.
	    game.add.existing(aEDark);
	    // specifies the x coordinate of the enemy.
	    aEDark.x = 200;
	    // specifies the y coordinate of the enemy.
	    aEDark.y = 300;
	    // constructs more of the above object.
	   	player = new Player(game,'player',3,500);
	   	aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 832;
	    aEDark.y = 352;
	    aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 2656;
	    aEDark.y = 384;
	    aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 3168;
	    aEDark.y = 320;
	    aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 3168;
	    aEDark.y = 32;

	    aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 2500;
	    aEDark.y = 100;

	     aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 1500;
	    aEDark.y = 400;

	     aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x = 1000;
	    aEDark.y = 600;

	    // constructs the checkpoints at specific places of the map.
	    checkpoint = game.add.sprite(80,845,'checkpoint');
	    // enables arcade physics for the checkpoint.
	    game.physics.arcade.enable(checkpoint);
	    // enables the checkpoint body.
		checkpoint.enableBody = true;
		// constructs more of the above objects.
		checkpoint2 = game.add.sprite(1060,585,'checkpoint');
	    game.physics.arcade.enable(checkpoint2);
		checkpoint2.enableBody = true;
		checkpoint3 = game.add.sprite(2248,775,'checkpoint');
	    game.physics.arcade.enable(checkpoint3);
		checkpoint3.enableBody = true;

	   	// adds the player and camera following it in the game.
	   	player = new Player(game,'player',3,500);
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);

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

    	checkpoint4 = game.add.sprite(3889,840,'checkpoint1');
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

    	var heart = game.add.image(34,30,'heart');
    	heart.scale.setTo(0.3,0.3);
    	heart.anchor.setTo(0.5,0.5);
    	heart.fixedToCamera = true;
    	var lifeCount = game.add.image(34,75,'candle');
    	lifeCount.scale.setTo(0.045);
    	lifeCount.anchor.setTo(0.5,0.5);
    	lifeCount.fixedToCamera = true;
    	
    	// add lives in the game.
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
		// layer collision.
		game.physics.arcade.collide(player,layer2);

		// adds overlap conditions with the checkpoints.
		game.physics.arcade.overlap(player,checkpoint,this.reachCheckpoint,null,this);
		game.physics.arcade.overlap(player,checkpoint2,this.reachCheckpoint2,null,this);
		game.physics.arcade.overlap(player,checkpoint3,this.reachCheckpoint3,null,this);
		//game.physics.arcade.overlap(player,checkpoint4,this.reachCheckpoint4,null,this);
		this.updateShadowTexture();
		//life.updateCrop();
		//console.log(healthFire.x,healthFire.y);
		if(widthLife.width<0 ){
			widthLife.width = 0;
			dead = true;
			player.animations.stop(null,true);
			
			this.lights.remove(player);
			player.alpha = 0;
	
			//create a custom timer


			timer = game.time.create();
				//create a event 3s from now
			timeEvent = timer.add(Phaser.Timer.SECOND*3,this.endTimer,this);
			timer.start();
		}

		if(countero == 4){
			l5.destroy();
		}
		if(countero == 3){
			l4.destroy();
		}
		if(countero == 2){
			l3.destroy();
		}
		if(countero == 1){
			l2.destroy();
		}
		if(countero == 0){
			l1.destroy();
			BGM3.stop();
			game.state.start("GameOver");
		}
	},
	
	/**
	 * The reachCheckpoint function creates a new checkpoint for the player to start in when player
	 * and checkpoint collides.
	 * @param player: the player object
	 * @param checkpoint: the checkpoint object
	 */
	reachCheckpoint: function(player,checkpoint){
		console.log("a");
		//TempX = checkpoint.x;
    	//TempY = checkpoint.y;
    	Ignite.play();
		CrowdCheck = 1;
		widthLife.width = totalLife;
		var saved=new Checkpoint(game,checkpoint.x,checkpoint.y-5,'checkpoint1');
		game.add.existing(saved);

		//saved.enableBody = true;
		checkpoint.kill();
		this.lights.add(saved);
		saved.LIGHT_RADIUS = 50;
		
	},

	/**
	 * The reachCheckpoint2 function starts the player at the second checkpoint when the player and
	 * the checkpoint collides.
	 * @param player: the player object
	 * @param checkpoint: the checkpoint object
	 */
	reachCheckpoint2: function(player,checkpoint2){
		console.log("a");
		//TempX = checkpoint2.x;
    	//TempY = checkpoint2.y;
    	Ignite.play();
		CrowdCheck = 2;
		widthLife.width = totalLife;
		var saved2=new Checkpoint(game,checkpoint2.x,checkpoint2.y-5,'checkpoint1');
		game.add.existing(saved2);

		//saved.enableBody = true;
		checkpoint2.kill();
		this.lights.add(saved2);
		saved2.LIGHT_RADIUS = 50;
		

	},

	/**
	 * The reachCheckpoint3 function starts the player at the third checkpoint when the player and the 
	 * checkpoint collides.
	 * @param player: the player object
	 * @param checkpoint: the checkpoint object
	 */
	reachCheckpoint3: function(player,checkpoint3){
		console.log("a");
		//TempX = checkpoint2.x;
    	//TempY = checkpoint2.y;
    	Ignite.play();
		CrowdCheck = 3;
		widthLife.width = totalLife;
		var saved3=new Checkpoint(game,checkpoint3.x,checkpoint3.y-5,'checkpoint1');
		game.add.existing(saved3);

		//saved.enableBody = true;
		checkpoint3.kill();
		this.lights.add(saved3);
		saved3.LIGHT_RADIUS = 50;
		

	},
	/**
	 * The reachCheckpoint4 function starts the player at the fourth checkpoint when the player and 
	 * the checkpoint collides.
	 * @param player: the player object
	 * @param checkpoint: the checkpoint object
	 */
	//reachCheckpoint4: function(player,checkpoint4) {
	//	console.log("a");
	//	TempX = checkpoint2.x;
	//	TempY = checkpoint2.y;
	//	CrowdCheck = 4;
	//	widthLife.width = totalLife;
	//	var saved4=new Checkpoint(game,checkpoint4.x,checkpoint4.y-5,'checkpoint1');
	//	game.add.existing(saved4);
	//	saved.enableBody = true;
	//	checkpoint4.kill();
	//	this.lights.add(saved4);
	//	saved4.LIGHT_RADIUS = 50;
	//},

	updateShadowTexture:function(){
		this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
		this.shadowTexture.context.fillRect(0,0,game.world.width,game.world.height);
		// this.shadowTexture.context.fillRect(2000,0,2000,1200);
		// this.shadowTexture.context.fillRect(4000,0,2000,1200);
		// this.shadowTexture.context.fillRect(6000,0,2000,1200);

    	// Iterate through each of the lights and draw the glow
    	this.lights.forEach(function(m) {
    		if(m == player) {
    			if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    				// Randomly change the radius each frame
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
       	 		else {
       	 			// Randomly change the radius each frame
        			playerRadius = 20 + this.game.rnd.integerInRange(1,10);

        			// Draw circle of light with a soft edge
        			var gradient =this.shadowTexture.context.createRadialGradient(m.x, m.y,20*0.75,m.x, m.y,playerRadius);
        			gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        			gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        			this.shadowTexture.context.beginPath();
        			this.shadowTexture.context.fillStyle = gradient;
        			this.shadowTexture.context.arc(m.x, m.y, playerRadius, 0, Math.PI*2);
        			this.shadowTexture.context.fill();
       	 		}	
       	 	}
       	 	else {
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

};

/**
 * The crop life function reduces the size of the lifebar.
 */
LevelHole.prototype.cropLife = function(){
	if(widthLife.width >= 0){
		game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /30)) }, 0.1, Phaser.Easing.Linear.None, true);
	}
}

/**
 * Sets where the player respawns depending on the checkpoint reached.
 */
LevelHole.prototype.endTimer = function() {
	if(dead == true) {
		timer.stop();
		widthLife.width = totalLife;
		player.body.velocity.y=0;
		countero--;
		player.alpha = 1;
		player.facing = 'right';
		this.lights.add(player);
		if(CrowdCheck == 0) {
    		player.x = 10;
    		player.y = 500;
    	} else if(CrowdCheck == 1) {
    		player.x = checkpoint.x;
    		player.y = checkpoint.y - 30;
    	} else if(CrowdCheck == 2) {
    		player.x = checkpoint2.x;
    		player.y = checkpoint2.y - 30;
    	} else if(CrowdCheck == 3) {
    		player.x = checkpoint3.x;
    		player.y = checkpoint3.y - 30;
    	} else if(CrowdCheck == 4) {
    		player.x = checkpoint4.x;
    		player.y = checkpoint4.y - 30;
    	}
	}
	dead = false;
}