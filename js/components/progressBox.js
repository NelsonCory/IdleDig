class ProgressBox extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;

        this.progGoal=10;

        this.text1 = this.scene.add.text(0,0,"0",{fontFamily: 'Garamond', fontSize: 15,stroke: "#000000",
            strokeThickness: 3});
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);
    


       this.text2 = this.scene.add.text(this.text1.x,this.text1.y+30,model.progGoal,{fontFamily: 'Garamond', fontSize: 15,stroke: "#000000",
        strokeThickness: 3});
       this.text2.setOrigin(0.5,0.5);
       this.add(this.text2);
    
        this.scene.add.existing(this);

        emitter.on(G.PROGRESS_UPDATED,this.progressUpdated,this);
        
    }
    progressUpdated(){
      //  this.text2.setText(model.progGoal);
        if(model.progress >=  model.progGoal){
            console.log("create artifact"); // create artifact once progress is complete
            model.progress = 0
            emitter.emit(G.MODIFY_ARTIFACT,1);
        }
        this.text1.setText(model.progress);
    }
    

}