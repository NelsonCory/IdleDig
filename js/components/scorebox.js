class ScoreBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;

        this.text1 = this.scene.add.text(0,0,"0");
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        this.scene.add.existing(this);

        emitter.on(G.PROGRESS_UPDATED,this.progressUpdated,this);
        
    }
    progressUpdated(){
        this.text1.setText(model.progress);
    }

}