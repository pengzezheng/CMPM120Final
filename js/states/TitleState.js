/**
 * This is the title screen of the game.
 * @param loads the Phaser game framework.
 */
var TitleState = function(game) {};
TitleState.prototype = {
	
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 * In this case, it simply displays an image.
	 */
	create: function() {
		/*var titleText = game.add.text(game.width/2, game.height/2, 'LAST LIGHT', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		titleText.anchor.set(0.5);

		var instructText = game.add.text(game.width/2, game.height/2 + 48, 'Use the Arrow Keys to move around.', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		instructText.anchor.set(0.5);

		var playText = game.add.text(game.width/2, game.height*.8, 'Press the SPACE BAR to Start', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);*/

		// adds and sets the title screen image.
		var sky = game.add.sprite(0, 0, 'title screen');
		sky.scale.setTo(1.2,1.08);

	},

	/**
	 * The update function makes changes in the game screen when conditions are met.
	 * In this case, pressing the spacebar sends the player to the next state.
	 */
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("CrowdToHole");
		}
	}
};