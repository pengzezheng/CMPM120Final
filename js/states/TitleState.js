/**
 * This is the title state that the player first sees when starting the game.
 * @param loads the Phaser game framework.
 */
var TitleState = function(game) {};
TitleState.prototype = {
	
	/**
	 * The create function.
	 */
	create: function() {
		var title = game.add.image(0,0,'title');
		title.scale.setTo(1.2,1.07);
	},

	/**
	 * The update function.
	 */
	update: function() {
		// begins the first level when the spacebar is pressed.
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {

			game.state.start("Instruction");

		}
	}
};