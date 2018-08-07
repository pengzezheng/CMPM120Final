var LoadingState = function(game) {};
LoadingState.prototype = {
	preload: function() {
		game.load.image('sky', 'assets/background.png');
	    game.load.image('ground', 'assets/platform.png');
	    game.load.image('star', 'assets/mob.png');
	    game.load.image('diamond', 'assets/diamond.png');
	    game.load.image('firstaid', 'assets/firstaid.png');
	    game.load.image('candle', 'assets/stand.png');
	},
	create: function() {
		game.state.start("TitleState")
	}
};