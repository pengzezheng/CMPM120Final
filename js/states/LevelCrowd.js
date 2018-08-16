var LevelCrowd = function(game) {};
LevelCrowd.prototype = {
	create: function() {
		game.world.setBounds(0, 0, 8000, 1000);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		var sky = game.add.sprite(-100, 0, 'sky');
		var land = game.add.sprite(0, 800, 'ground');
	   	sky.scale.setTo(1.5, 1);
	   	land.scale.setTo(5, 0.1);
	},

	update: function() {
		/*if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("Level1State");
		}*/
	}
};