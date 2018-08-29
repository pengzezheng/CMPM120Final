var LoadingState = function(game) {};
LoadingState.prototype = {
	preload: function() {
		game.load.spritesheet('player','assets/master candleman sprite sheet.png',128,128);

		//game.load.image('sky', 'assets/Hbackground.png');


	    game.load.image('star', 'assets/flyingenemy.png');
	    game.load.image('candle', 'assets/stand.png');
	    game.load.image('jumppad', 'assets/jump pad.png');
	    game.load.spritesheet('enemyT', 'assets/c mob 2 sheet better.png', 256, 256);
	    game.load.spritesheet('enemyDark', 'assets/level 3 boss.png', 512, 512);
	    game.load.image('theBullet', 'assets/c mob bullet.png');
	    game.load.image('mouthOpen', 'assets/level 3 trap open.png');
	    //game.load.image('enemyDark', 'assets/boss temp.png');
	    game.load.image('bg3', 'assets/Holes background.png');
	    game.load.image('lives', 'assets/ui.png');
	    //game.load.image('level2bg', 'assets/level2bg.json');
	    game.load.tilemap('level2bg', 'assets/untitled.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.tilemap('levelholebg', 'assets/levelholebg.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.tilemap('levelHeight', 'assets/lvl1remake.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.image('tileset2', 'assets/tilemap2.png', 32, 32);
	    game.load.image('tileset3', 'assets/level 3 tile map.png', 32, 32);
	    game.load.image('tileset1', 'assets/level 1 tilemap.png', 32, 32);
	    game.load.spritesheet('bom', 'assets/FlyingEnemybullet.png', 32, 32);
	    game.load.spritesheet('ex', 'assets/explosionspritesheet.png', 32, 32);
	    game.load.spritesheet('ELand', 'assets/c mob sheet better.png', 144, 200);
	    game.load.audio('BGM1', 'audios/BGMLVL1.wav');
	    game.load.audio('EXPLO', 'audios/Explosion.wav');
	    game.load.audio('EA', 'audios/EAttack.wav');
	    game.load.audio('Die', 'audios/die.wav');

	    game.load.image('checkpoint', 'assets/dead candle man.png');
	    game.load.image('checkpoint1', 'assets/dead candle man lit.png');
	    game.load.image('bgCrowd', 'assets/c Background.png');
	    game.load.image('bg1', 'assets/H background.png');


	    //game.load.audio('fireSound', 'audios/fire.wav');


	},
	create: function() {
		game.state.start("TitleState");
	}
};