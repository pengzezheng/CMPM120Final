var TitleState = function(game) {};
TitleState.prototype = {
	create: function() {

		/*var titleText = game.add.text(game.width/2, game.height/2, 'LAST LIGHT', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		titleText.anchor.set(0.5);

		var instructText = game.add.text(game.width/2, game.height/2 + 48, 'Use the Arrow Keys to move around.', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		instructText.anchor.set(0.5);

		var playText = game.add.text(game.width/2, game.height*.8, 'Press the SPACE BAR to Start', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);*/
		var sky = game.add.sprite(0, 0, 'title screen');
		sky.scale.setTo(1.2,1.08);
		titleMusic=new Phaser.Sound(game,'titleMusic',1,true);
	    titleMusic.allowMultiple=true;
	    titleMusic.play();

	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			titleMusic.stop();
			game.state.start("Start");

		}
	}
};