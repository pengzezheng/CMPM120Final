
var layer1;
var LevelHole = function(game) {};
LevelHole.prototype = {
	create: function() {
		var sky = game.add.sprite(-100, 0, 'bg3');
	   	sky.scale.setTo(1.05, 1);
		game.world.setBounds(0, 0, 4000, 960);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.time.advancedTiming = true;
		map=game.add.tilemap('levelholebg');
	   	map.addTilesetImage('level3', 'tileset3', 32, 32);
	   	layer2=map.createLayer('layer2');
	   	game.add.existing(layer2);
	   	//layer1.resizeWorld();
	   	map.setCollisionByExclusion([], true, 'layer2', true);

	   	aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 200;
	    aEHold.y = 725;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 448;
	    aEHold.y = 704 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 672;
	    aEHold.y = 832 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 832;
	    aEHold.y = 704 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 1088;
	    aEHold.y = 576 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 1184;
	    aEHold.y = 832 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 1344;
	    aEHold.y = 832 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 1408;
	    aEHold.y = 640 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 2048;
	    aEHold.y = 608 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 3360;
	    aEHold.y = 576 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 3488;
	    aEHold.y = 544 + 24;

	    aEHold = new EnemyHold(game,'mouthOpen');
	    game.add.existing(aEHold);
	    aEHold.x = 1536;
	    aEHold.y = 128 + 24;

	    for(var i = 0; i < 60; i++) {
	    	if(i % 4 == 0) {
	    		aEHold = new EnemyHold(game,'mouthOpen');
		    	game.add.existing(aEHold);
		    	aEHold.x = 1696 + (i * 32);
		    	aEHold.y = 128 + 24;
	    	}
	    }

	   	aEDark = new EnemyDark(game,'enemyDark');
	    game.add.existing(aEDark);
	    aEDark.x =200;
	    aEDark.y = 300;
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

	   	player = new Player(game,'player',3,500);
    	
    	// player.x=0;
	    // player.y=300;
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
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);
	},

	update: function() {
		game.physics.arcade.collide(player,layer2);
		this.updateShadowTexture();
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
    			
        		
       	 
    			if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
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
       	 		else{
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

	render: function(){
		// game.debug.body(spring, false);
		//game.debug.body(aELand, "#00ff00", true);
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");

	}
};