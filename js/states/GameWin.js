/**
 * This is the completion game over state screen.
 * @param loads the Phaser game framework.
 */
var GameWin = function(game) {};
GameWin.prototype = {
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 * A winning background image is loaded to indicate the game is over.
	 */
	create: function() {
		var sky = game.add.sprite(0, 0, 'last panel');
		sky.scale.setTo(1.2,1.08);
		winMusic=new Phaser.Sound(game,'gameWin',1,true);
	    winMusic.allowMultiple=true;
	    winMusic.play();
	},
	
	/**
	 * The update function make changes in the game screen when conditions are met.
	 * Pressing the spacebar returns the player to the title screen state.
	 */
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			winMusic.stop();
			game.state.start("TitleState");
		}
	}
};