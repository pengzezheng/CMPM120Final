var GameOver = function(game) {};
GameOver.prototype = {
	create: function() {
		var sky = game.add.sprite(0, 0, 'game over');
		sky.scale.setTo(1.2,1.08);
		overMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    overMusic.allowMultiple=true;
	    overMusic.play();
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			overMusic.stop();
			game.state.start("TitleState");
		}
	}
};