class InfluenceBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;
        this.key = config.key;

        this.icon = this.scene.add.image(Math.floor(game.config.width*0.15),Math.floor(game.config.height*0.05),config.key);
        this.icon.setOrigin(0.5,0.5);
        this.text1 = this.scene.add.text(this.icon.x-25,this.icon.y-25,"0",{
            fontSize: "20px",
            stroke: "#000000",
            strokeThickness: 4});
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        this.scene.add.existing(this);

        emitter.on(G.INFLUENCE_UPDATED,this.influenceUpdated,this);
        
    }
    influenceUpdated(){
        this.text1.setText(model.influence);
    }

}