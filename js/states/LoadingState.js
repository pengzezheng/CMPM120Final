var LoadingState = function(game) {};
LoadingState.prototype = {
	preload: function() {
		game.load.atlas('player','assets/candleman.png','assets/candleman.json');
		game.load.image('sky', 'assets/background.png');
	    game.load.image('ground', 'assets/platform.png');
	    game.load.image('star', 'assets/mob.png');
	    game.load.image('diamond', 'assets/diamond.png');
	    game.load.image('firstaid', 'assets/firstaid.png');
	    game.load.image('candle', 'assets/stand.png');


	    game.load.image('pillar', 'assets/pillar.png');

	},
	create: function() {
		game.state.start("Level1State")
	}
};