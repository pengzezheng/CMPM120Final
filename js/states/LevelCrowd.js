var checkpoint;
var checkpoint2;

var temps;

var checkpointRadius;
var check;
var TempX;
var TempY;
var spring;
var layer1;
var playerLight;
var CrowdCheck;
var LevelCrowd = function(game) {};
LevelCrowd.prototype = {
	create: function() {

		game.world.setBounds(0, 0, 8000, 960);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		 game.time.advancedTiming = true;
		var sky = game.add.sprite(-100, 0, 'bgCrowd');
	   	sky.scale.setTo(1.01, 0.8);
	   	map=game.add.tilemap('level2bg');
	   	map.addTilesetImage('platform', 'tileset2', 32, 32);
	   	layer1=map.createLayer('layer1');
	   	var a =game.add.existing(layer1);
	   	a.debug=true;
	   	//layer1.resizeWorld();

	   	
	   	game.time.events.loop(Phaser.Timer.SECOND, this.cropLife, this);
	   	CrowdCheck = 0;
    	/*platforms = game.add.group();
	    platforms.enableBody = true;
	 	
		bgLands = game.add.group();*/
		/*for (var i=0; i<20; i++){
			console.log("b");
			var land = platforms.create(i*350, 650, 'pillar');
	    	land.scale.setTo(8, 0.1);
	    	land.body.immovable = true;
		}*/

		/*for (var i=0; i<20; i++){
			var land = platforms.create(50+i*350, 250, 'pillar');
	    	land.scale.setTo(8, 0.1);
	    	land.body.immovable = true;
	    	aETorrent =new EnemyTorrent(game,'fly');
	    	aETorrent.x = 100+i*350;
	    	aETorrent.y=225;
	    	game.add.existing(aETorrent);
		}*/

		/*for (var i=0; i<20; i++){
			var land = platforms.create(400*i, 950, 'pillar');
	    	land.scale.setTo(12, 0.1);
	    	land.body.immovable = true;
		}*/

		//for (var i =0; i <30; i++) {

	   	map.setCollisionByExclusion([], true, 'layer1', true);


		/*for (var i =0; i <30; i++) {
>>>>>>> 88cc2906952b6b61633dfcb35c4c5d2a5a323429
	        console.log("a");
	        aELand =new EnemyLand1(game,'ELand');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        game.add.existing(aELand);
	        aELand.x = 500 + 300*i;
	        aELand.y = 300;
	        aELand.scale.setTo(0.5);
	    }*/

	    for (var i =0; i <10; i++) {
	        console.log("a");
	        var aBgE=game.add.sprite(300 + 20*i, 850,'ELand');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        aBgE.scale.setTo(0.25);
	    }

	    aETorrent =new EnemyTorrent(game,'enemyT');
	    game.add.existing(aETorrent);
	    aETorrent.x = 300;
	    aETorrent.y = 600;
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
		checkpoint = game.add.sprite(80,680,'checkpoint');
	    game.physics.arcade.enable(checkpoint);
		checkpoint.enableBody = true;

		checkpoint2 = game.add.sprite(1660,580,'checkpoint');
	    game.physics.arcade.enable(checkpoint2);
		checkpoint2.enableBody = true;
	    // player = new Player(game,'player');
	    // player.x=0;
	    // player.y=500;
    	// game.add.existing(player);
    	// game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	// life.fixedToCamera = true;
    	// life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	// bglife.fixedToCamera = true;
    	// bglife.cameraOffset.setTo(630,50);



    	//refer to the example: https://gamemechanicexplorer.com/#lighting-1
		this.LIGHT_RADIUS = 300;
		//create shadow texture
		this.shadowTexture = this.game.add.bitmapData(this.game.world.width,this.game.world.height);
		//create an object that will use the bitmap as texture
		var lightSprite = game.add.image(0,0,this.shadowTexture);
		//dark everything below the light
		lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
		// Create the lights
    	this.lights = this.game.add.group();
    	player = new Player(game,'player',3,500);
    	
    	// player.x=0;
	    // player.y=300;
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);
    	this.lights.add(player);
	},

	update: function() {
		game.physics.arcade.overlap(player,checkpoint,this.reachCheckpoint,null,this);
		game.physics.arcade.overlap(player,checkpoint2,this.reachCheckpoint2,null,this);
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
		if(widthLife.width<=0 && CrowdCheck == 0){
			player.x = 10;
			player.y = 500;
			widthLife.width = totalLife;
		}
		else if (widthLife.width<=0&& CrowdCheck ==1){
	    	
	    	player.x = checkpoint.x+5;
	    	player.y = checkpoint.y;
	    	//player.body.gravity.y=1900;
	    	widthLife.width = totalLife;
	    	//player.LIGHT_RADIUS = 300;
	    		
	    	//decreasingLight = game.add.tween(player).to( {LIGHT_RADIUS: (2*player.LIGHT_RADIUS/3) }, 10000, Phaser.Easing.Linear.None, true);


	   //game.physics.arcade.overlap(player,aELand,reachaELand,null,this);
	   
	    	//player.kill();
	    	//game.state.start('GameOverState');
	    }
	    else if(widthLife.width<=0&& CrowdCheck ==2){
	    	
	    	player.x = checkpoint2.x+5;
	    	player.y = checkpoint2.y;
	    	//player.body.gravity.y=1900;
	    	widthLife.width = totalLife;
	    	
	    }
		//console.log(player.x,player.y);
		/*if (widthLife.width<=0&& check ==1){
	    	
	    		player.x = tempX+20;
	    		player.y = tempY -100;
	    		player.body.gravity.y=1900;
	    		widthLife.width = totalLife;
	    	


	   //game.physics.arcade.overlap(player,aELand,reachaELand,null,this);
	   
	    	//player.kill();
	    	//game.state.start('GameOverState');
	    }
	    else if (widthLife.width<=0&& check ==0){
	    	
	    		player.x = 15;
	    		player.y = 0;
	    		player.body.gravity.y=1900;
	    		*widthLife.width = totalLife;
	    }*/

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
		//refer to the example: https://gamemechanicexplorer.com/#lighting-1
		// this.LIGHT_RADIUS = 100;
		// //create shadow texture
		// this.shadowTexture = this.game.add.bitmapData(this.game.world.width,this.game.world.height);
		// //create an object that will use the bitmap as texture
		// var checkpointLight = this.game.add.image(0,0,this.shadowTexture);
		// //dark everything below the light
		// checkpointLight.blendMode = Phaser.blendModes.MULTIPLY;
		// checkpointRadius = this.LIGHT_RADIUS + this.game.rnd.integerInRange(1,10);

		// var checkpointGradient = player.shadowTexture.context.createRadialGradient(saved.x,saved.y,player.LIGHT_RADIUS*0.75,saved.x,saved.y,checkpointRadius);
		
		
		// checkpointGradient.addColorStop(0,'rgba(255,255,255,1.0)');
		// checkpointGradient.addColorStop(1,'rgba(255,255,255,0.0)');

		// //draw the circle of light
		// saved.shadowTexture.context.beginPath();
		// saved.shadowTexture.context.fillStyle = gradient;
		// saved.shadowTexture.context.arc(this.x,this.y,radius,0,Math.PI*2);
		// saved.shadowTexture.context.fill();

		// //tell the engine it should update the texture
		// saved.shadowTexture.dirty = true;

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
	updateShadowTexture:function(){
		this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
    	this.shadowTexture.context.fillRect(0, 0, this.game.world.width, this.game.world.height);

    	// Iterate through each of the lights and draw the glow
    	this.lights.forEach(function(m) {
    		if(m == player){
        	// Randomly change the radius each frame
        	var radius = this.LIGHT_RADIUS + this.game.rnd.integerInRange(1,10);

        	// Draw circle of light with a soft edge
        	var gradient =this.shadowTexture.context.createRadialGradient(m.x, m.y,this.LIGHT_RADIUS * 0.75,m.x, m.y, radius);
        	gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        	gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        	this.shadowTexture.context.beginPath();
        	this.shadowTexture.context.fillStyle = gradient;
        	this.shadowTexture.context.arc(m.x, m.y, radius, 0, Math.PI*2);
        	this.shadowTexture.context.fill();
        }else{
        	// Randomly change the radius each frame
        	var radius = 100 + this.game.rnd.integerInRange(1,10);

        	// Draw circle of light with a soft edge
        	var gradient =this.shadowTexture.context.createRadialGradient(m.x, m.y,100 * 0.75,m.x, m.y, radius);
        	gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        	gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        	this.shadowTexture.context.beginPath();
        	this.shadowTexture.context.fillStyle = gradient;
        	this.shadowTexture.context.arc(m.x, m.y, radius, 0, Math.PI*2);
        	this.shadowTexture.context.fill();

        }
    }, this);

    // This just tells the engine it should update the texture cache
    this.shadowTexture.dirty = true;
	},

	/*springDone: function(){ 
		player.body.gravity.y=temp;
		temp=0;
	},*/
	render: function(){
		// game.debug.body(spring, false);
		game.debug.body(layer1, "#9090ff", true);
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");

	}
};
LevelCrowd.prototype.cropLife = function(){
	if(widthLife.width > 0){
		game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /30)) }, 200, Phaser.Easing.Linear.None, true);
	}
}
