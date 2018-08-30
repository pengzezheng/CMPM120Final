var CrowdToHole = function(game) {};
CrowdToHole.prototype = {
	create: function() {
		var sky = game.add.sprite(0, 0, 'Panel 3');
		sky.scale.setTo(1.2,1.08);
		HoleHorror=new Phaser.Sound(game,'horror',1,true);
	    HoleHorror.allowMultiple=true;
	    HoleHorror.play();
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			HoleHorror.stop();
			game.state.start("LevelHole");
		}
	}
};