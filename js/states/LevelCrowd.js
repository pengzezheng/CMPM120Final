var checkpoint;
var LevelCrowd = function(game) {};
LevelCrowd.prototype = {
	create: function() {
		game.world.setBounds(0, 0, 8000, 1000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		var sky = game.add.sprite(-100, 0, 'bgCrowd');
	   	sky.scale.setTo(1.01, 0.8);
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
	    var land = platforms.create(0, 950, 'pillar');
	    land.scale.setTo(10, 0.1);
	    land.body.immovable = true;
	    checkpoint = game.add.sprite(100,900,'checkpoint');
	    game.physics.arcade.enable(checkpoint);
		checkpoint.enableBody = true;

		for (var i=0; i<10; i++){
			var land = platforms.create(i*350, 750, 'pillar');
	    	land.scale.setTo(8, 0.1);
	    	land.body.immovable = true;
		}
		for (var i =0; i <10; i++) {
	        console.log("a");
	        aELand =new EnemyLand1(game,'CrowdLand');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        game.add.existing(aELand);
	        aELand.x = 500 + 300*i;
	        aELand.y = 800;
	        aELand.scale.setTo(0.5);
	    }
	},

	update: function() {
		game.physics.arcade.overlap(player,checkpoint,this.reachCheckpoint,null,this);
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
	}
};
