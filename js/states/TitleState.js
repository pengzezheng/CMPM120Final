var TitleState = function(game) {};
TitleState.prototype = {
	create: function() {
		var titleText = game.add.text(game.width/2, game.height/2, 'CANDLE MAN', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		titleText.anchor.set(0.5);

		var instructText = game.add.text(game.width/2, game.height/2 + 48, 'Use the Arrow Keys to move around.', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		instructText.anchor.set(0.5);

		var playText = game.add.text(game.width/2, game.height*.8, 'Press the SPACE BAR to Start', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);
	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("LevelHeight");
		}
	}
};