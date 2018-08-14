var LoadingState = function(game) {};
LoadingState.prototype = {
	preload: function() {
		game.load.atlas('player','assets/candleman.png','assets/candleman.json');
		game.load.image('sky', 'assets/Hbackground.png');
	    game.load.image('ground', 'assets/platform.png');
	    game.load.image('star', 'assets/mob.png');
	    game.load.image('fly', 'assets/flyingenemy.png');
	    game.load.image('candle', 'assets/stand.png');
	    game.load.spritesheet('bom', 'assets/FlyingEnemybullet.png', 32, 32);
	    game.load.spritesheet('ex', 'assets/explosionspritesheet.png', 32, 32);
	    game.load.image('fire','assets/fire.png');
	    game.load.image('pillar', 'assets/pillar.png');
	    game.load.audio('BGM1', 'audios/BGMLVL1.wav');
	    game.load.audio('EXPLO', 'audios/Explosion.wav');
	    game.load.audio('EA', 'audios/EAttack.wav');

	},
	create: function() {
		game.state.start("TitleState");
	}
};