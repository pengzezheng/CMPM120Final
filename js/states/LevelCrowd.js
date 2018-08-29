var checkpoint;
var checkpoint2;
var checkpoint3;
var checkpoint4;
var temps;

var checkpointRadius;
var check;
var TempX;
var TempY;
var spring;
var layer1;
var playerLight;
var CrowdCheck;
var playerRadius;
var blowRadius;
var deathbg=false;
var timer;
var timeEvent;
var dead = false;
var LevelCrowd = function(game) {this.deathText;};
LevelCrowd.prototype = {
	create: function() {
		// //create a custom timer
		// timer = game.time.create();

		// //create a event 3s from now
		// timeEvent = timer.add(Phaser.Timer.SECOND*3,this.endTimer,this);
		Died=game.add.audio('Die');
		//Died.allowMultiple=true;
		game.world.setBounds(0, 0, 4000, 960);

		game.physics.startSystem(Phaser.Physics.ARCADE);
		 game.time.advancedTiming = true;
		var sky = game.add.sprite(-100, 0, 'bgCrowd');
	   	sky.scale.setTo(1.01, 0.8);
	   	map=game.add.tilemap('level2bg');
	   	map.addTilesetImage('tilemap2', 'tileset2', 32, 32);
	   	layer1=map.createLayer('layer1');
	   	var a =game.add.existing(layer1);
	   	//var a =game.add.existing(layer1);
	   	//a.debug=true;
	   	//layer1.resizeWorld();

	   	
	   	game.time.events.loop(Phaser.Timer.SECOND, this.cropLife, this);
	   	CrowdCheck = 0;


	   	map.setCollisionByExclusion([], true, 'layer1', true);


	    for (var i =0; i <10; i++) {
	        //console.log("a");
	        var aBgE=game.add.sprite(300 + 20*i, 850,'ELand');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        aBgE.scale.setTo(0.25);
	    }

	    for(var i = 0; i < 34; i++) {
	    	var fakeEnemies = game.add.sprite(1920 + (16 * i), 864 - 16, 'ELand');
	    	fakeEnemies.scale.setTo(0.25);
	    }

	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = 320;
	    aELand.y = 672;
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (28 * 32);
	    aELand.y = (21 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (38 * 32);
	    aELand.y = (14 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (46 * 32);
	    aELand.y = (18 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (49 * 32);
	    aELand.y = (18 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (68 * 32);
	    aELand.y = (13 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (73 * 32);
	    aELand.y = (11 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (76 * 32);
	    aELand.y = (11 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (84 * 32);
	    aELand.y = (11 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (97 * 32);
	    aELand.y = (13 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (100 * 32);
	    aELand.y = (13 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (63 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (66 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (69 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (72 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (28 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (30 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (32 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (34 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (36 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (38 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (40 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (42 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (82 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (84 * 32);
	    aELand.y = (27 * 32);
	    aELand = new EnemyLand1(game,'ELand');
	    game.add.existing(aELand);
	    aELand.x = (86 * 32);
	    aELand.y = (27 * 32);

	    	
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = 1024;
	    aETorrent.y = 608 + 18;
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = (18 * 32);
	    aETorrent.y = (21 * 32) + 18;
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = (23 * 32);
	    aETorrent.y = (17 * 32) + 18;
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = (33 * 32);
	    aETorrent.y = (19 * 32) + 18;
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = (44 * 32);
	    aETorrent.y = (18 * 32) + 18;
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = (80 * 32);
	    aETorrent.y = (10 * 32) + 18;
	    aETorrent = new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = (113 * 32);
	    aETorrent.y = (14 * 32) + 18;

	    spring=game.add.group();
		game.physics.enable(spring, Phaser.Physics.ARCADE);
		spring.enableBody=true;
		//spring.body.immovable = true;
		var sp =spring.create(200,650,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(440,725,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(1100,825,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);	
		var sp =spring.create(2000,750,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(2740,670,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(2960,750,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(3800,750,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(5275,500,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(5000,600,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);
		var sp =spring.create(5500,600,'jumppad');
		sp.scale.setTo(0.15);
		sp.body.immovable=true;
		sp.body.setSize(256, 100, 0, 175);


		checkpoint = game.add.sprite(80,680,'checkpoint');
	    game.physics.arcade.enable(checkpoint);
		checkpoint.enableBody = true;

		checkpoint2 = game.add.sprite(1660,580,'checkpoint');
	    game.physics.arcade.enable(checkpoint2);
		checkpoint2.enableBody = true;

		checkpoint3 = game.add.sprite(3040,777,'checkpoint');
	    game.physics.arcade.enable(checkpoint3);
		checkpoint3.enableBody = true;

		checkpoint4 = game.add.sprite(3959,522,'checkpoint');
	    game.physics.arcade.enable(checkpoint4);
		checkpoint4.enableBody = true;

    	player = new Player(game,'player',10,500);
    	game.add.existing(player);
    	// player.x=0;
	    // player.y=300;
    	
    	//refer to the example: https://gamemechanicexplorer.com/#lighting-1
		this.LIGHT_RADIUS = 300;

		//create shadow texture
		var graphics = game.add.graphics(100, 100);
		this.shadowTexture = this.game.add.bitmapData(game.world.width,game.world.height);
		
		//create an object that will use the bitmap as texture

		//var lightSprite = game.add.group();
		//lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
		var lightShadow = game.add.image(0,0,this.shadowTexture);
		lightShadow.blendMode = Phaser.blendModes.MULTIPLY;

		
		// Create the lights
    	this.lights = this.game.add.group();
    	// player = new Player(game,'player',10,500);
    	
    	// // player.x=0;
	    // // player.y=300;
    	// game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	
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
		console.log(player.x,player.y);

		game.physics.arcade.overlap(player,checkpoint,this.reachCheckpoint,null,this);
		game.physics.arcade.overlap(player,checkpoint2,this.reachCheckpoint2,null,this);
		game.physics.arcade.overlap(player,checkpoint3,this.reachCheckpoint3,null,this);
		game.physics.arcade.overlap(player,checkpoint4,this.reachCheckpoint4,null,this);
		//game.physics.arcade.overlap(player,checkpoint5,this.reachCheckpoint5,null,this);
		game.physics.arcade.collide(player,layer1);
		game.physics.arcade.collide(aELand,layer1);
		
		var onSpring=game.physics.arcade.collide(player,spring);
	   	if(onSpring==true){ 
			player.body.velocity.y=-1200;
			//this.animations.play('up');
			//game.time.events.add(Phaser.Timer.SECOND * 2, this.springDone, this);

		}
		this.updateShadowTexture();
		life.updateCrop();
		if(widthLife.width<=0 ){
			//deathbg=true;
			widthLife.width = 0;
			dead = true;
			player.animations.stop(null,true);
			Died.play();
			this.lights.remove(player);
			player.alpha = 0;
	
			//create a custom timer
			//if (deathbg==true){
		
				//deathbg=false;
			//}

			timer = game.time.create();
				//create a event 3s from now
			timeEvent = timer.add(Phaser.Timer.SECOND*3,this.endTimer,this);
			timer.start();
		}
	},

	reachCheckpoint: function(player,checkpoint){
		console.log("a");
		//TempX = checkpoint.x;
    	//TempY = checkpoint.y;
		CrowdCheck = 1;
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
		CrowdCheck = 2;
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
		CrowdCheck = 3;
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
		CrowdCheck = 4;
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

	
};
LevelCrowd.prototype.cropLife = function(){
	if(widthLife.width > 0){
		game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /30)) }, 1, Phaser.Easing.Linear.None, true);
	}
}

LevelCrowd.prototype.endTimer = function(){
	if(dead == true){
		timer.stop();
		widthLife.width = totalLife;
		player.alpha = 1;
		player.facing = 'right';
		this.lights.add(player);
		if(CrowdCheck == 0){
    		player.x = 10;
    		player.y = 500;
    	}else if(CrowdCheck == 1){
    		player.x = checkpoint.x;
    		player.y = checkpoint.y - 30;
    	}else if(CrowdCheck == 2){
    		player.x = checkpoint2.x;
    		player.y = checkpoint2.y - 30;
    	}else if(CrowdCheck == 3){
    		player.x = checkpoint3.x;
    		player.y = checkpoint3.y - 30;
    	}else if(CrowdCheck == 4){
    		player.x = checkpoint4.x;
    		player.y = checkpoint4.y - 30;
    	}

	}
	dead = false;
}
