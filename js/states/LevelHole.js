
var layer1;
var LevelHole = function(game) {};
LevelHole.prototype = {
	create: function() {
		var sky = game.add.sprite(-100, 0, 'bgCrowd');
	   	sky.scale.setTo(1.01, 0.8);
		game.world.setBounds(0, 0, 8000, 960);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		map=game.add.tilemap('levelholebg');
	   	map.addTilesetImage('tilemap2', 'tileset2', 32, 32);
	   	layer2=map.createLayer('layer2');
	   	game.add.existing(layer2);
	   	//layer1.resizeWorld();
	   	map.setCollisionByExclusion([], true, 'layer2', true);
	   	player = new Player(game,'player',3,500);
    	
    	// player.x=0;
	    // player.y=300;
    	game.add.existing(player);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
	},

	update: function() {
		game.physics.arcade.collide(player,layer2);
	},
}