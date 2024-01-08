class ArtifactBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;

        this.text1 = this.scene.add.text(0,0,"Artifacts: 0");
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        this.scene.add.existing(this);

        emitter.on(G.ARTIFACT_UPDATED,this.artifactUpdated,this);
        
    }
    artifactUpdated(){
        this.text1.setText("Artifacts: "+ model.artifact);
    }

}