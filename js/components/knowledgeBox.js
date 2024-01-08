class KnowledgeBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        //nonfunctional at this time
        super(config.scene);
        this.scene = config.scene;

        this.text1 = this.scene.add.text(0,0,"Knowledge: 0");
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        this.scene.add.existing(this);

        emitter.on(G.KNOWLEDGE_UPDATED,this.knowledgeUpdated,this);
        
    }
    knowledgeUpdated(){
        //this.text1.setText("Artifacts: "+ model.artifact);
        console.log("knowledge updated");
    }

}