/**
 * This is the start screen state.
 * @param loads the Phaser game framework.
 */
var Start = function(game) {};
Start.prototype = {
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 * In this case, it simply displays the start screen image.
	 */
	create: function() {
		var sky = game.add.sprite(0, 0, 'Panel 1');
		sky.scale.setTo(1.2,1.08);
		startMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    startMusic.allowMultiple=true;
	    startMusic.play();
	},

	/**
	 * The update function makes changes in the game screen when conditions are met.
	 * In this case, pressing the spacebar sends the player to the first level.
	 */
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			startMusic.stop();
			game.state.start("LevelHeight");
		}
	}
};