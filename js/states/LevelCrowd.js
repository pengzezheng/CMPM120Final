var checkpoint;
var temps;
var checkpointRadius;
var check;
var LevelCrowd = function(game) {};
LevelCrowd.prototype = {
	create: function() {
		game.world.setBounds(0, 0, 8000, 1000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		var sky = game.add.sprite(-100, 0, 'bgCrowd');
	   	sky.scale.setTo(1.01, 0.8);
    	platforms = game.add.group();
	    platforms.enableBody = true;
	 
		bgLands = game.add.group();
		for (var i=0; i<10; i++){
			var land = platforms.create(i*350, 650, 'pillar');
	    	land.scale.setTo(8, 0.1);
	    	land.body.immovable = true;
		}

		for (var i=0; i<10; i++){
			var land = platforms.create(50+i*350, 250, 'pillar');
	    	land.scale.setTo(8, 0.1);
	    	land.body.immovable = true;
	    	aETorrent =new EnemyTorrent(game,'fly');
	    	aETorrent.x = 100+i*350;
	    	aETorrent.y=225;
	    	game.add.existing(aETorrent);
		}

		for (var i=0; i<10; i++){
			var land = platforms.create(400*i, 950, 'pillar');
	    	land.scale.setTo(12, 0.1);
	    	land.body.immovable = true;
		}

		for (var i =0; i <15; i++) {
	        console.log("a");
	        aELand =new EnemyLand1(game,'ELand');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        game.add.existing(aELand);
	        aELand.x = 500 + 300*i;
	        aELand.y = 800;
	        aELand.scale.setTo(0.5);

	        //var bgLand=bgLands.create(300*i, 825, 'CrowdLand');
	        //bgLand.scale.setTo(0.5);
	       // var bgLand=bgLands.create(50+300*i, 825, 'CrowdLand');
	        //bgLand.scale.setTo(0.5);
	    }

	    sp = game.add.sprite(50,650,'fire');
		game.physics.enable(sp, Phaser.Physics.ARCADE);
		sp.scale.setTo(2, 2);
		sp.body.immovable = true;
		checkpoint = game.add.sprite(100,900,'checkpoint');
	    game.physics.arcade.enable(checkpoint);
		checkpoint.enableBody = true;
	    player = new Player(game,'player');
	    player.x=0;
	    player.y=250;
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);

	},

	update: function() {
		game.physics.arcade.overlap(player,checkpoint,this.reachCheckpoint,null,this);
		var spring=game.physics.arcade.collide(player,sp);
	   	if(game.input.keyboard.isDown(Phaser.Keyboard.UP)&&spring){ 
	   		temp=player.body.gravity.y;
			player.body.gravity.y=1000;
			//this.animations.play('up');
			game.time.events.add(Phaser.Timer.SECOND * 2, this.springDone, this);

		}
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
		check = 1;
		widthLife.width = totalLife;
		var saved=game.add.sprite(checkpoint.body.x,checkpoint.body.y,'checkpoint1');
	//saved.enableBody = true;
		checkpoint.kill();
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

	springDone: function(){ 
		player.body.gravity.y=temp;
		temp=0;
	},
};
