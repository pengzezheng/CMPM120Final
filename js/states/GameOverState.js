var GameOverState = function(game) {};
GameOverState.prototype = {
	create: function() {
		
	},
	update: function() {
		game.state.start("GameState");
	}
};