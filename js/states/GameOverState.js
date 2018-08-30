var GameOverState = function(game) {};
GameOverState.prototype = {
	/**
	 * The create function.
	 */
	create: function() {
		var gameOver = game.add.image(0,0,'gameOver');
		gameOver.scale.setTo(1.2,1.07);
	},

	/**
	 * The update function.
	 */
	update: function() {
		// begins the first level when the spacebar is pressed.
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			
			game.state.start("LevelHeight");
			
			
		}
	}

};