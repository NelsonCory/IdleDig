class FlatButton extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        if (!config.scene)
        {
            if(!config.scene)
            {
                console.log("missing scene");
            }
        }
        if (!config.key){
            console.log("missing key");
            return;
        }
        super(config.scene);
        this.config=config;
        this.scene=config.scene;
        this.back = this.scene.add.image(0,0,config.key);
        if(config.key == "choiceButton"){
            console.log("choice button created");
            this.back.displayWidth = game.config.width*0.7;
            this.back.scaleY = this.back.scaleX;
        }

        this.add(this.back);
        
        if (config.text)
        {
            //console.log("config.text");
            if(config.textConfig)
            {
                //console.log("textConfig detected");
                this.text1=this.scene.add.text(0,0,config.text,config.textConfig);
            }
            else{
                console.log(config.text);
                this.text1=this.scene.add.text(0,0,config.text);
            }
            this.text1.setOrigin(0.5,0.5);
            this.add(this.text1);
        }
        if (config.x){
            this.x=config.x;
        }
        if (config.y){
            this.y=config.y;
        }
        if (config.event){
            this.back.setInteractive();
            this.back.on("pointerdown",this.pressed,this);
        }
        if(model.isMobile == -1){
            this.back.on("pointerover",this.over,this);
            this.back.on("pointerout",this.out,this);
        }

        this.scene.add.existing(this);
    }
    over()
    {
        this.y -=5;
    }
    out()
    {
        this.y +=5;
    }
    pressed(){
        if (this.config.params){
            //console.log("outputting params on press");
            //console.log(this.config.params);
            emitter.emit(this.config.event, this.config.params);
        }
        else{
            emitter.emit(this.config.event);
        }
    }
}