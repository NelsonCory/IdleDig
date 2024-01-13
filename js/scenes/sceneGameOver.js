class SceneGameOver extends Phaser.Scene {
    constructor() {
        super('SceneGameOver');
    }
    preload()
    {
    	
    }
    create() {
        var digger = this.add.image(game.config.width/2,game.config.height/2,"digger");
        this.add.text("Game Over");
    }
    update() {}
}