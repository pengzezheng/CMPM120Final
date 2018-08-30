var GameWinState = function(game){};
GameWinState.prototype = {
	/**
	 * The create function.
	 */
	create: function() {
		var gameWin = game.add.image(0,0,'gameWin');
		gameWin.scale.setTo(1.2,1.07);
	},

	/**
	 * The update function.
	 */
	update: function() {
		
	}
}