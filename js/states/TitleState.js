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
		//  writes the title of the game in the screen.
		var titleText = game.add.text(game.width/2, game.height/2, 'LAST LIGHT', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		titleText.anchor.set(0.5);

		// writes the instructions in the screen.
		var instructText = game.add.text(game.width/2, game.height/2 + 48, 'Use the Arrow Keys to move around.', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		instructText.anchor.set(0.5);

		// tells the player what button to press to start.
		var playText = game.add.text(game.width/2, game.height*.8, 'Press the SPACE BAR to Start', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);
	},

	/**
	 * The update function.
	 */
	update: function() {
		// begins the first level when the spacebar is pressed.
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("LevelHole");
		}
	}
};