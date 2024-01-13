class SceneGameOver extends Phaser.Scene {
    constructor() {
        super('SceneGameOver');
    }
    preload()
    {
    	
    }
    create() {
        var digger = this.add.image(game.config.width/2,game.config.height/2,"digger");
        var gameOver = this.add.text(game.config.width/2,60,"Game Over",{color:"white",fontFamily: 'Garamond', fontSize: 40});
        gameOver.setOrigin(0.5,0.5);

        if(model.artifact < 0){
            var artifactMessage = this.add.text(game.config.width/2,Math.floor(game.config.height*0.8),"You lost too many artifacts!",{color:"white",fontFamily: 'Garamond', fontSize: 30});
            artifactMessage.setOrigin(0.5,0.5);
        }
        else{
            var congratsMessage= this.add.text(game.config.width/2,Math.floor(game.config.height*0.8),"You have reached the peak of your career!",{color:"white",fontFamily: 'Garamond', fontSize: 30});
            congratsMessage.setOrigin(0.5,0.5);

        }

        var influenceScore =  this.add.text(Math.floor(game.config.width*0.2) ,Math.floor(game.config.height*0.5) ,"Influence: " + model.influence,{color:"white",fontFamily: 'Garamond', fontSize: 30});
        influenceScore.setOrigin(0.5,0.5);
        var knowledgeScore =  this.add.text(Math.floor(game.config.width*0.2) ,Math.floor(game.config.height*0.45),"Knowledge: " + model.knowledge,{color:"white",fontFamily: 'Garamond', fontSize: 30});
        knowledgeScore.setOrigin(0.5,0.5);
        var artifactScore =  this.add.text(Math.floor(game.config.width*0.2) ,Math.floor(game.config.height*0.4),"Artifacts: " + model.artifact,{color:"white",fontFamily: 'Garamond', fontSize: 30});
        artifactScore.setOrigin(0.5,0.5);
    }
    update() {}
}