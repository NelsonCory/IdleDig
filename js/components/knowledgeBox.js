class KnowledgeBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;
        this.key = config.key;
        this.icon = this.scene.add.image(Math.floor(game.config.width*0.85),Math.floor(game.config.height*0.05),config.key);
        //this.text1.setOrigin(0.5,0.5);
        this.text1 = this.scene.add.text(25,0,"0",{
            fontSize: "20px",
            stroke: "#000000",
            strokeThickness: 4});
        this.add(this.text1);

        this.scene.add.existing(this);

        emitter.on(G.KNOWLEDGE_UPDATED,this.knowledgeUpdated,this);
        
    }
    knowledgeUpdated(){
        this.text1.setText(model.knowledge);
    }

}