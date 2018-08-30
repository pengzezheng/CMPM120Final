var game;
var hp = 5;
var platforms;

window.onload = function() {
    game = new Phaser.Game(960, 640, Phaser.AUTO, 'myGame');
    game.state.add("LoadingState", LoadingState);
    game.state.add("TitleState", TitleState);
    game.state.add("Start", Start);
    game.state.add("GameOver", GameOver);
    game.state.add("LevelCrowd", LevelCrowd);
    game.state.add("LevelHole", LevelHole);
    game.state.add("LevelHeight", LevelHeight);
    game.state.add("HeightToCrowd", HeightToCrowd);
    game.state.add("CrowdToHole", CrowdToHole);
    game.state.add("GameWin", GameWin);

    //game.state.add("GameOverState", GameOverState);
    game.state.start("LoadingState");
}
