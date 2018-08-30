var Start = function(game) {};
Start.prototype = {
	create: function() {
		var sky = game.add.sprite(0, 0, 'Panel 1');
		sky.scale.setTo(1.2,1.08);
		startMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    startMusic.allowMultiple=true;
	    startMusic.play();
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			startMusic.stop();
			game.state.start("CrowdToHole");
		}
	}
};