var Level1State = function(game) {};
Level1State.prototype = {
	create: function() {
		scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
		game.world.setBounds(0, 0, 4000, 1000);
		// game.camera(800,600);
	    //  We're going to be using physics, so enable the Arcade Physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    //  A simple background for our game
	    var sky = game.add.sprite(-100, 0, 'sky');
	   	sky.scale.setTo(1.5,0.5);

	    platforms = game.add.group();

	    platforms.enableBody = true;

	    // Here we create the ground.
	    var ground = platforms.create(0, game.world.height - 64, 'ground');

	    ground.scale.setTo(3, 0.1);
	    ground.body.immovable = true;

		// Fixed starting x and y coordinates for the pillars
		var xCoordinate = 200;
		var yCoordinate = 750
		var pillarSize = 0.10;
		// Generates 17 pillars and 4 safety clouds
		for(var i = 0; i < 17; i++) {
			var pillar = platforms.create(xCoordinate,yCoordinate,'pillar');
			pillar.scale.setTo(1, pillarSize);
			pillar.body.immovable = true;
			pillarSize = (game.rnd.integerInRange(5, 45) / 100);
			if(i == 5 || i == 8 || i == 12 || i == 16) {
				var ledge = platforms.create(xCoordinate + 75, yCoordinate + 150,'ground');
				ledge.scale.setTo(0.1, 0.1);
				ledge.body.immovable = true;
				//pillarSize = (game.rnd.integerInRange(5, 45) / 100);
			}
			// adds a random x and y integer from the previous pillar.
			// a new pillar is always generated right of the previous pillar.
			xCoordinate += game.rnd.integerInRange(150, 220);
			// a new pillar may be higher or lower than the previous pillar.
			yCoordinate += game.rnd.integerInRange(-150, 50);
			while(yCoordinate <= 300 || yCoordinate > 750) {
				if(yCoordinate <= 300) {
					yCoordinate += game.rnd.integerInRange(100, 250);
				}
				else if (yCoordinate > 750) {
					yCoordinate -= game.rnd.integerInRange(100, 250);
				}
			}
		}

		// The player and its settings
	    player = new Player(game,'player');
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	player.life.fixedToCamera = true;
    	player.life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);
    	candles = game.add.group();
    	candles.enableBody = true;
    	var candle = candles.create(3675,700,'player');
    	candle.anchor.set(0.5);
    	candle.scale.setTo(0.02,0.02);
    	var startpoint = game.add.sprite(45,907,'player');
    	startpoint.enableBody = true;
    	startpoint.scale.set(0.02);


	    // // The player and its settings
	    // player = game.add.sprite(32, game.world.height - 150, 'candle');
	    // player.scale.setTo(0.05);
	    // game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
	    // //  We need to enable physics on the player
	    // game.physics.arcade.enable(player);

	    // //  Player physics properties. Give the little guy a slight bounce.
	    // player.body.bounce.y = 0.2;
	    // player.body.gravity.y = 300;
	    // player.body.collideWorldBounds = true;
	    //aELand = game.add.group();
	    //aELand.enableBody = true;
	    for (var i =0; i <20; i++) {
	        console.log("a");
	        aELand =new EnemyLand1(game,'star');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        game.add.existing(aELand);
	        aELand.x = 500 + 150*i;
	        aELand.y = 800;
	        aELand.scale.setTo(0.1);
	    }

	    for (var i =0; i <10; i++) {
	        console.log("a");
	        aEFly =new EnemyFly1(game,'star');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        game.add.existing(aEFly);
	        aEFly.x = 500 + 300*i;
	        aEFly.y = 100;
	        aEFly.scale.setTo(0.1);
	    }

	    // aEFly=new EnemyFly1(game,"star");
	    // game.add.existing(aEFly);
	    // aEFly.x=1000;
	    // aEFly.y=700;
	    // aEFly.scale.setTo(0.1)
	    // for (var i =0; i <10; i++) {
	    //     aET=new EnemyTorrent(game,"star");
	    //     game.add.existing(aET);
	    //     aET.x=200+ 300*i;
	    //     aET.y=800;
	    //     aET.scale.setTo(0.1)
	    // }
	},
	update: function() {
		//  Collide the player and the stars with the platforms
	   //game.physics.arcade.overlap(player,aELand,reachaELand,null,this);
	   console.log(player.x,player.y);
	    if (player.widthLife.width<0){
	    	player.kill();
	    	game.state.start('GameOverState');
	    }
	    game.physics.arcade.overlap(player,candles,reachCandle1,null,this);
	    /*aELand.forEachAlive(function(m){
	    	var distance = this.game.math.distance(m.x,m.y,player.x,player.y);
	    	if(distance<=50){
				m.kill();
				
				
				player.widthLife.width -= player.totalLife/4;

				
			//if the distance between any fish with the boy is more than 510, the fish would be killed
			}
	    },this);*/
	}
}
function reachCandle1(player,candle){
	game.state.start("GameWinState");
}