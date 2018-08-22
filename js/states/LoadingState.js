var LoadingState = function(game) {};
LoadingState.prototype = {
	preload: function() {
		game.load.atlas('player','assets/candleman.png','assets/candleman.json');
		game.load.image('sky', 'assets/Hbackground.png');
	    game.load.image('ground', 'assets/platform.png');
	    game.load.image('star', 'assets/mob.png');
	    game.load.image('fly', 'assets/flyingenemy.png');
	    game.load.image('candle', 'assets/stand.png');
	    //game.load.image('level2bg', 'assets/level2bg.json');
	    game.load.tilemap('level2bg', 'assets/level2bg.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.image('tileset2', 'assets/tilemap2.png', 32, 32);
	    game.load.spritesheet('bom', 'assets/FlyingEnemybullet.png', 32, 32);
	    game.load.spritesheet('ex', 'assets/explosionspritesheet.png', 32, 32);
	    game.load.spritesheet('ELand', 'assets/c mob sheet better.png', 144, 200);
	    game.load.image('fire','assets/candle bullet.png');
	    game.load.image('pillar', 'assets/pillar.png');
	    game.load.audio('BGM1', 'audios/BGMLVL1.wav');
	    game.load.audio('EXPLO', 'audios/Explosion.wav');
	    game.load.audio('EA', 'audios/EAttack.wav');

	    game.load.image('checkpoint', 'assets/dead candle man.png');
	    game.load.image('checkpoint1', 'assets/dead candle man lit.png');
	    game.load.image('bgCrowd', 'assets/c Background.png');
	    game.load.image('CrowdLand', 'assets/crowd mob 1.png');

	    //game.load.audio('fireSound', 'audios/fire.wav');


	},
	create: function() {
		game.state.start("TitleState");
	}
};