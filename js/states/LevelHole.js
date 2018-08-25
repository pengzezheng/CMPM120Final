
var layer1;
var LevelHole = function(game) {};
LevelHole.prototype = {
	create: function() {
		game.world.setBounds(0, 0, 8000, 960);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		map=game.add.tilemap('levelholebg');
	   	map.addTilesetImage('tilemap2', 'tileset2', 32, 32);
	   	layer1=map.createLayer('layer2');
	   	game.add.existing(layer1);
	   	//layer1.resizeWorld();
	   	map.setCollisionByExclusion([], true, 'layer2');
	},

	update: function() {
	
	},
}