var GameWinState = function(game){};
GameWinState.prototype = {
	create:function(){
		var overText = game.add.text(game.width/2,game.height/3,'You Defeat the Nightmare',{font:'Helvetica',fontSize:'48px',fill:'#fff'});
		var restartText = game.add.text(game.width/2,game.height/2+256,'Press SPACEBAR to Restart',{font:'Helvetica',fontSize:'48px',fill:'#fff'});
		restartText.anchor.set(0.5);
		overText.anchor.set(0.5);
	},
	update:function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			game.state.start("Level1State");
			
			
		}
	},
}