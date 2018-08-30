/**
 * This is the loading state that begins before the player sees the title screen. This loads the necessary assets.
 * @param loads the Phaser game framework.
 */

var LoadingState = function(game) {};
LoadingState.prototype = {
	
	/**
	 * The preload function. Loads all the assets necessary to run the game.
	 */
	preload: function() {
		// load all spritesheet assets
		game.load.spritesheet('player','assets/master candleman sprite sheet.png',128,128);
		game.load.spritesheet('enemyT', 'assets/c mob 2 sheet better.png', 256, 256);
	    game.load.spritesheet('enemyDark', 'assets/level 3 boss.png', 512, 512);
	    game.load.spritesheet('bom', 'assets/FlyingEnemybullet.png', 32, 32);
	    game.load.spritesheet('ex', 'assets/explosionspritesheet.png', 32, 32);
	    game.load.spritesheet('ELand', 'assets/c mob sheet better.png', 144, 200);

	    // load all image assets
	    game.load.image('star', 'assets/flyingenemy.png');
	    game.load.image('heart', 'assets/heart_life.png');
	    game.load.image('title screen', 'assets/title screen.png');
	    game.load.image('Panel 1', 'assets/Panel 1.png');
	    game.load.image('Panel 2', 'assets/panel 2.png');
	    game.load.image('Panel 3', 'assets/panel 3.png');
	    game.load.image('game over', 'assets/game over.png');
	    game.load.image('last panel', 'assets/last panel.png');
	    game.load.image('candle', 'assets/stand.png');
	    game.load.image('jumppad', 'assets/jump pad.png');
	    game.load.image('theBullet', 'assets/c mob bullet.png');
	    game.load.image('mouthOpen', 'assets/level 3 trap open.png');
	    game.load.image('bg3', 'assets/Holes background.png');
	    game.load.image('lives', 'assets/ui.png');
	    game.load.image('tileset2', 'assets/tilemap2.png', 32, 32);
	    game.load.image('tileset3', 'assets/level 3 tile map.png', 32, 32);
	    game.load.image('tileset1', 'assets/level 1 tilemap.png', 32, 32);
	    game.load.image('checkpoint', 'assets/dead candle man.png');
	    game.load.image('checkpoint1', 'assets/dead candle man lit.png');
	    game.load.image('bgCrowd', 'assets/c Background.png');
	    game.load.image('bg1', 'assets/H background.png');

	    //load all tilemap assets
	    game.load.tilemap('level2bg', 'assets/untitled.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.tilemap('levelholebg', 'assets/levelholebg.json', null, Phaser.Tilemap.TILED_JSON);
	    game.load.tilemap('levelHeight', 'assets/lvl1remake.json', null, Phaser.Tilemap.TILED_JSON);
	    
	    // load all audio assets
	    game.load.audio('BGM1', 'audios/BGMLVL1.wav');
	    game.load.audio('EXPLO', 'audios/Explosion.wav');
	    game.load.audio('EA', 'audios/EAttack.wav');
	    game.load.audio('Die', 'audios/die.wav');
	    game.load.audio('pad', 'audios/pad.wav');
	    game.load.audio('hit', 'audios/hit.wav');
	    game.load.audio('ignite', 'audios/ignite.wav');
	    game.load.audio('lvl2bgm', 'audios/lvl2bgm.wav');
	    game.load.audio('lvl3bgm', 'audios/lvl3bgm.mp3');
	    game.load.audio('chewing', 'audios/chewing.wav');
	    game.load.audio('monster', 'audios/monster.wav');
	    game.load.audio('titleMusic', 'audios/titleMusic.mp3');
	    game.load.audio('horror', 'audios/horror.mp3');
	    game.load.audio('gameWin', 'audios/kanon.wav');
	},

	/**
	 * The create function. This begins the beginning state after assets are loaded.
	 */
	create: function() {
		var loadText = game.add.text(600,100,'Loading...',{font:'Helvetica',fontSize:'24px',fill:'#fff'});
		loadText.anchor.set(0.5);
		game.state.start("TitleState");
	}
	
};