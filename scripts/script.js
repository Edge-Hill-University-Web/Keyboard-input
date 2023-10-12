class KeyboardExample extends Phaser.Scene {

    constructor(){
        super();

        this.player;
        this.cursors;
        this.canvas;
    }
    
    preload() {
        this.load.image('ship', 'assets/rocket.png');
        this.load.image('background', 'assets/background.png');
    }

    create (){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = this.physics.add.image(400, 300, 'ship');
        this.player.setScale(0.1);
        
        this.player.setCollideWorldBounds(true);
    }

    update (){
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(300);
        }
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    transparent: true,
    width: 800,
    height: 600,
    disableContextMenu: false,
    scene: KeyboardExample, 
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};


const game = new Phaser.Game(config);