var GameState = function(game) {};
var candles;
var eLand={};
var aELand;
//var bglife;
//var widthLife;
//var totalLife;
//var life;
//var count = 0;
GameState.prototype = {
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

	   /* for (var i =1; i <20; i++){
	    	var ledge = platforms.create(400*i, 750, 'ground');
	    	ledge.body.immovable = true;
	    	ledge.scale.setTo(0.1, 0.1);
		}*/
		var ledge = platforms.create(400,750,'ground');
		ledge.scale.setTo(0.1, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(750,550,'ground');
		ledge.scale.setTo(0.1, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(1050,750,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(1300,800,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(1500,600,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.09, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(1700,400,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.09, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(2000,600,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.09, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(2200,550,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.09, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(2500,400,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(2800,500,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(3100,400,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(3350,550,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;
		var ledge = platforms.create(3650,750,'ground');
		ledge.anchor.set(0.5);
		ledge.scale.setTo(0.05, 0.1);
		ledge.body.immovable = true;










		// The player and its settings

	    player = new Player(game,'player');
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
    	var bmd = game.add.bitmapData(200, 40);
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 200, 80);
		bmd.ctx.fillStyle = '#00685e';
		bmd.ctx.fill();
		bglife = game.add.sprite(630, 50, bmd);
    	bglife.anchor.set(0.5);
    	//add current health bar
    	/*bmd = game.add.bitmapData(180, 30);
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
    	game.time.events.loop(Phaser.Timer.SECOND, cropLife, this);
    	life.fixedToCamera = true;
    	life.cameraOffset.setTo(630-bglife.width/2 + 10,50);
    	bglife.fixedToCamera = true;
    	bglife.cameraOffset.setTo(630,50);*/
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
	    /*bgmusic = game.sound.add('bgm');
		bgmusic.loop = true;
		bgmusic.play();*/

		/*var bmd = this.game.add.bitmapData(200, 40);
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 200, 80);
		bmd.ctx.fillStyle = '#00685e';
		bmd.ctx.fill();
		bglife = this.game.add.sprite(630, 50, bmd);
    	bglife.anchor.set(0.5);
    	//add current health bar
    	bmd = this.game.add.bitmapData(180, 30);
    	bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 200, 80);
		bmd.ctx.fillStyle = '#00f910';
		bmd.ctx.fill();
		this.widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
    	this.totalLife = bmd.width;
    	this.life = this.game.add.sprite(630- bglife.width/2 + 10, 50, bmd);
    	this.life.anchor.y = 0.5;
    	this.life.cropEnabled = true;
    	this.life.crop(this.widthLife);
    	this.game.time.events.loop(0, this.cropLife, this);*/

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
	    if (this.widthLife.width<0){
	    	player.kill();
	    	game.state.start('GameOverState');
	    }
	    game.physics.arcade.overlap(player,candles,reachCandle,null,this);
	    life.updateCrop();
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
function reachCandle(player,candle){
	game.state.start("Level1State");
}
/*function cropLife(){
	if(widthLife.width > 0 && count == 0){
		game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife /100)) }, 200, Phaser.Easing.Linear.None, true);
	}
	
}*/
/*function reachaELand(player,aELand){
	count = 1;
	aELand.kill();
	widthLife.width = widthLife.width - totalLife/4;
	count = 0;
	
	console.log('kill');
}*/
