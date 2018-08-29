var LevelHole = function(game) {};
LevelHole.prototype = {
	create: function() {

	},

	update: function() {
		
	},

	render: function(){
		// game.debug.body(spring, false);
		//game.debug.body(aELand, "#00ff00", true);
		game.debug.text('FPS: ' + game.time.fps || 'FPS: --', 40, 40, "#00ff00");

	}
};