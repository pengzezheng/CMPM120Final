var LoadingState = function(game) {};
LoadingState.prototype = {
	preload: function() {
		game.load.image('sky', 'assets/sky.png');
    	game.load.image('ground', 'assets/platform.png');
    	game.load.image('star', 'assets/star.png');
    	game.load.image('diamond', 'assets/diamond.png');
    	game.load.image('firstaid', 'assets/firstaid.png');
    	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	},
	create: function() {
		game.state.start("TitleState")
	}
};