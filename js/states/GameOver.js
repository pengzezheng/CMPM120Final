/**
 * This is the game over state screen.
 * @param loads the Phaser game framework.
 */
var GameOver = function(game) {};
GameOver.prototype = {
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 * A game over background image is loaded to indicate the game is over.
	 */
	create: function() {
		var sky = game.add.sprite(0, 0, 'game over');
		sky.scale.setTo(1.2,1.08);
		overMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    overMusic.allowMultiple=true;
	    overMusic.play();
	},
	
	/**
	 * The update function make changes in the game screen when conditions are met.
	 * Pressing the spacebar returns the player to the title screen state.
	 */
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			overMusic.stop();
			game.state.start("TitleState");
		}
	}
};