/**
 * This is the transition screen from height level to crowd level.
 * @param loads the Phaser game framework.
 */
var HeightToCrowd = function(game) {};
HeightToCrowd.prototype = {
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 */
	create: function() {
		var sky = game.add.sprite(0, 0, 'Panel 2');
		sky.scale.setTo(1.2,1.08);
		HeightHorror=new Phaser.Sound(game,'horror',1,true);
	    HeightHorror.allowMultiple=true;
	    HeightHorror.play();
	},

	/**
	 * The update function make changes in the game screen when conditions are met.
	 * In this case, pressing the spacebar will start the second level.
	 */
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			HeightHorror.stop();
			game.state.start("LevelCrowd");
		}
	}
};