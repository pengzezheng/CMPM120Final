var hit = 0;
var timer;
var ifRestart = 0;

var Level1State = function(game) {};
Level1State.prototype = {
	create: function() {

		//BGM1=game.add.audio('BGM1');
		EAtt=game.add.audio('EA');
		explSound=game.add.audio('EXPLO');
		EAtt.allowMultiple=true;

		game.world.setBounds(0, 0, 4000, 1000);
		game.time.events.loop(Phaser.Timer.SECOND, this.cropLife, this);
		// game.camera(800,600);
	    //  We're going to be using physics, so enable the Arcade Physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);
	    BGM1=new Phaser.Sound(game,'BGM1',1,true);
	    BGM1.allowMultiple=true;
	    BGM1.play();
	    //  A simple background for our game
	    var sky = game.add.sprite(-100, 0, 'sky');
	   	sky.scale.setTo(1.5, 1);

	    platforms = game.add.group();

	    platforms.enableBody = true;

		// Fixed starting x and y coordinates for the pillars
		var xCoordinate = 200;
		var yCoordinate = 750;
		var pillarSize = 0.10;
		// Generates 17 pillars and 4 safety clouds
		for(var i = 0; i < 17; i++) {
			var pillar = platforms.create(xCoordinate,yCoordinate,'pillar');
			pillar.scale.setTo(1.5, pillarSize);
			pillar.body.immovable = true;
			pillarSize = (game.rnd.integerInRange(5, 45) / 100);
			if(i == 5 || i == 8 || i == 12 || i == 16) {
				var ledge = platforms.create(xCoordinate + 75, yCoordinate + 150,'ground');
				ledge.scale.setTo(0.1, 0.1);
				ledge.body.immovable = true;
				//pillarSize = (game.rnd.integerInRange(5, 45) / 100);
			}
			if(i == 4) {
				checkpoint = new Checkpoint(game, 'checkpoint', xCoordinate, yCoordinate - 50);
				game.add.existing(checkpoint);
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
		pillar = platforms.create(0,300,'pillar');
		pillar.scale.setTo(1, pillarSize);
		pillar.body.immovable = true;
		// The player and its settings
	    player = new Player(game,'player');
	    player.x=0;
	    player.y=250;
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);
    	candles = game.add.group();
    	candles.enableBody = true;
    	var candle = candles.create(3675,700,'player');
    	candle.anchor.set(0.5);
    	candle.scale.setTo(0.02,0.02);


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
	    for (var i =0; i <10; i++) {
	        console.log("b");
	        aELand =new EnemyGrab(game,'star');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        aELand.y = game.rnd.integerInRange(200,700);
	        aELand.x = 500 + 300*i;
	        game.add.existing(aELand);
	        //aELand.scale.setTo(0.05);
	    }

	    for (var i =0; i <10; i++) {
	        console.log("a");
	        aEFly =new EnemyFly1(game,'fly');
	        //eLand[i] = new EnemyLand1(game,'star',500+150*i,800);
	        game.add.existing(aEFly);
	        aEFly.x = 500 + 300*i;
	        aEFly.y = 100;
	        aEFly.scale.setTo(1.2);
	    }

	    //create timer to pause the game if player dies
	   //timer = game.time.create();

		//create a event 3s from now
		//timeEvent = timer.add(Phaser.Timer.SECOND*2,this.endTimer,this);

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



	   //game.physics.arcade.overlap(weapon.bullets,aELand,reachaELand,null,this);
	   life.updateCrop();
	    
	    
	   		//timer.start();
	    	//if(timer.running){
	    		//game.time.gamePaused();
	    	//}
	    	//else{
	    		//game.time.gameResumed();
	    	// ifRestart = 1;
	    	// game.input.enabled = false;
	    	// game.add.tween(player).to( { alpha: 0},1000, Phaser.Easing.Linear.None, true);
	    	
	    	//player.animations.stop(null,true);
	    	
	    	

	    	//game.time.events.add(Phaser.Timer.SECOND*1,changeRestart,this);

	    	// if(ifRestart == 1){
	    	// player.body.velocity.x = 0;
	    	// player.body.velocity.y = 0;
	    	// player.x = 0;
	   		// player.y = 250;
	   		// widthLife.width = totalLife;
	   		// game.input.enabled= true;
	    	// game.add.tween(player).to( { alpha: 1},0.1, Phaser.Easing.Linear.None, true);
	   		// ifRestart = 0;
		   	// }

	   	
	   	//game.add.tween(player).to( { alpha: 100},0.1, Phaser.Easing.Linear.None, true);

	    	//}

	   //game.physics.arcade.overlap(player,aELand,reachaELand,null,this);
	    if (widthLife.width<0){
	    	if(checkpoint.checkpointReached == true) {
	    		player.x = checkpoint.x;
	    		player.y = checkpoint.y - 50;
	    		widthLife.width = totalLife;
	    	}


	   //game.physics.arcade.overlap(player,aELand,reachaELand,null,this);
	   
	    	player.kill();
	    	game.state.start('GameOverState');
	    }


	   //game.physics.arcade.overlap(player,aELand,reachaELand,null,this);
	   		//game.time.events.add(Phaser.Timer.SECOND * 2, pauseGame, this);
	   		//player.x = 0;
	   		//player.y = 250;
	   		//widthLife.width = totalLife;
	    	//player.kill();
	    	//game.state.start('GameOverState');
	    

	    if(player.y >= 750){
	    	player.body.collideWorldBounds = false;
	    }

	    if(player.y >= 4000){
	    	player.kill();
	    	BGM1.stop();
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
Level1State.prototype.cropLife = function(){
	if(widthLife.width > 0&&hit == 0){
		game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /100)) }, 200, Phaser.Easing.Linear.None, true);
	}
}
function reachCandle1(player,candle){
	BGM1.stop();
	game.state.start("GameWinState");
}
// function changeRestart(){
// 	ifRestart = 0;
// 	player.x = 0;
// 	player.y = 250;
// 	widthLife.width = totalLife;
// 	game.input.enabled= true;
// 	game.add.tween(player).to( { alpha: 1},1, Phaser.Easing.Linear.None, true);
// }
//function pauseGame() {
	// toggle game pause
	
	
		//game.paused ? game.paused = false : game.paused = true;
	
	
//}
/*function endTimer(){
	timer.stop();
	player.x = 0;
	player.y = 250;
	widthLife.width = totalLife;
}*/
/*unction reachaELand(player,aELand){
	hit = 1;
	aELand.kill();
	widthLife.width = widthLife.width - totalLife/4;
	hit = 0;
	
	console.log('kill');
}*/