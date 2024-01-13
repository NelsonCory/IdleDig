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
        
        //button animations
        

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
            this.pos1 = this.y;
            this.pos2 = this.y+5;
        }
        if (config.event){
            this.back.setInteractive();
            this.back.on("pointerdown",this.pressed,this);
        }
        if(model.isMobile == -1){
            this.back.on("pointerover",this.over,this);
            this.back.on("pointerout",this.out,this);
        }
        else{
            //this.back.on("pointerover",this.over,this);
            //this.back.on("pointerout",this.out,this);
        }

        this.buttonActive = false;

        this.delayTimer = this.scene.time.addEvent({
            delay: 1000,                // ms
            callback: this.activateButton,
            callbackScope: this,
            loop: false,
            paused:false
    });


        this.scene.add.existing(this);
    }
    over()
    {
        this.y = this.pos1;
    }
    out()
    {
        this.y = this.pos2;
    }
    activateButton(){
        console.log("button activated");
        this.buttonActive = true;
    }
    togglePos(){
        if (this.y == this.pos1){
            this.y = this.pos2;
        }
        else{
            this.y = this.pos1;
        }
    }
    pressed(){
        this.togglePos();
        if (this.config.params){
            //console.log("outputting params on press");
            //console.log(this.config.params);
            if (this.buttonActive){
                emitter.emit(this.config.event, this.config.params);
            }
        }
        else{
            emitter.emit(this.config.event);
        }
    }
}