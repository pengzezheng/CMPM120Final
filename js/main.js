var game;
var hp = 5;
var platforms;

window.onload = function() {
    game = new Phaser.Game(960, 640, Phaser.AUTO, 'myGame');
    game.state.add("LoadingState", LoadingState);
    game.state.add("TitleState", TitleState);
    game.state.add("GameState", GameState);
    game.state.add("GameOverState", GameOverState);
    game.state.add("GameWinState", GameWinState);
    game.state.add("Level1State", Level1State);
    //game.state.add("GameOverState", GameOverState);
    game.state.start("LoadingState");
}
