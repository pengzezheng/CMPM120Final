/**
 * This is the transition screen from crowd level to hole level.
 * @param loads the Phaser game framework.
 */
var CrowdToHole = function(game) {};
CrowdToHole.prototype = {
	/**
	 * The create function adds and displays objects in the game screen for the player to see.
	 */
	create: function() {
		var sky = game.add.sprite(0, 0, 'Panel 3');
		sky.scale.setTo(1.2,1.08);
		HoleHorror=new Phaser.Sound(game,'horror',1,true);
	    HoleHorror.allowMultiple=true;
	    HoleHorror.play();
	},
	
	/**
	 * The update function make changes in the game screen when conditions are met.
	 * In this case, pressing the spacebar will start the third level.
	 */
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			HoleHorror.stop();
			game.state.start("LevelHole");
		}
	}
};