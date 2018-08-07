var GameState = function(game) {};
GameState.prototype = {
	create: function() {
		scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
		game.world.setBounds(0, 0, 4000, 1000);
		// game.camera(800,600);
	    //  We're going to be using physics, so enable the Arcade Physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    //  A simple background for our game
	    var sky =game.add.sprite(-100, 0, 'sky');
	   	sky.scale.setTo(1.5,0.5);

	    platforms = game.add.group();

	    platforms.enableBody = true;

	    // Here we create the ground.
	    var ground = platforms.create(0, game.world.height - 64, 'ground');

	    ground.scale.setTo(3, 0.1);
	    ground.body.immovable = true;

	    for (var i =1; i <20; i++){
	    	var ledge = platforms.create(400*i, 750, 'ground');
	    	ledge.body.immovable = true;
	    	ledge.scale.setTo(0.1, 0.1);
		}

		// The player and its settings
	    player = new Player(game,'player');
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	player.life.fixedToCamera = true;
    	player.life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);

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

	    for (var i =0; i <20; i++) {
	        console.log("a");
	        aELand=new EnemyLand1(game,"star");
	        game.add.existing(aELand);
	        aELand.x = 500 + 150*i;
	        aELand.y = 800;
	        aELand.scale.setTo(0.1);
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
	   
	    if (player.widthLife.width<0){
	    	player.kill();
	    }
	}
}