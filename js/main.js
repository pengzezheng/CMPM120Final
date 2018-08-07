var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var hp =5;
var platforms;
function preload() {
    game.load.atlas('player','assets/candleman.png','assets/candleman.json');
    game.load.image('fire','assets/fire.png');
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('diamond', 'assets/diamond.png');
    game.load.image('firstaid', 'assets/firstaid.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}
var platforms;

function create() {
	scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;

    // The player and its settings
    player = new Player(game,'player');
    game.add.existing(player);
    
    
    


    //  Player physics properties. Give the little guy a slight bounce.
    //player.body.bounce.y = 0.2;
   // player.body.gravity.y = 300;
    //player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    //player.animations.add('left', [0, 1, 2, 3], 10, true);
    //player.animations.add('right', [5, 6, 7, 8], 10, true);

    /*aET=new EnemyTorrent(game,"star");
    game.add.existing(aET);*/

}

function update() {

     //Collide the player and the stars with the platforms
    

   /*player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -350;
    }

    if (hp<4){
    	player.kill();
    }*/

}

