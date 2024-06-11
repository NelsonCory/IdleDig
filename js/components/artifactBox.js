class ArtifactBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;

        this.key = config.key;
        this.icon = this.scene.add.image(Math.floor(game.config.width*0.5),Math.floor(game.config.height*0.05),config.key);

        this.text1 = this.scene.add.text(25,0,"0",{
                    fontSize: "20px",
                    stroke: "#000000",
                    strokeThickness: 4});
        //this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        this.scene.add.existing(this);

        emitter.on(G.ARTIFACT_UPDATED,this.artifactUpdated,this);

    
    }
    artifactUpdated(){
        this.text1.setText(model.artifact);
    }

}