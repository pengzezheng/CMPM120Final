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
		// adds and sets the title screen image.
		var sky = game.add.sprite(0, 0, 'title screen');
		sky.scale.setTo(1.2,1.08);
		titleMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    titleMusic.allowMultiple=true;
	    titleMusic.play();

	},

	/**
	 * The update function makes changes in the game screen when conditions are met.
	 * In this case, pressing the spacebar sends the player to the next state.
	 */
	update: function() {
		// sends the player to the next state when spacebar is pressed.
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {

			titleMusic.stop();
			game.state.start("Start");
		}
	}
};