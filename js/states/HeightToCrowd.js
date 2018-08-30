var HeightToCrowd = function(game) {};
HeightToCrowd.prototype = {
	create: function() {
		var sky = game.add.sprite(0, 0, 'Panel 2');
		sky.scale.setTo(1.2,1.08);
		HeightHorror=new Phaser.Sound(game,'horror',1,true);
	    HeightHorror.allowMultiple=true;
	    HeightHorror.play();
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			HeightHorror.stop();
			game.state.start("LevelCrowd");
		}
	}
};