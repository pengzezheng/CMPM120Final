var GameWin = function(game) {};
GameWin.prototype = {
	create: function() {
		var sky = game.add.sprite(0, 0, 'last panel');
		sky.scale.setTo(1.2,1.08);
		winMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    winMusic.allowMultiple=true;
	    winMusic.play();
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			winMusic.stop();
			game.state.start("TitleState");
		}
	}
};