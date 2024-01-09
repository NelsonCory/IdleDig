class EventBox extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene)
        this.event = config.event;
        this.scene = config.scene;

        //eventID
        //EventName
        //eventPicture
        //content (blurb)
        //choices - array of buttons
        this.eventBack = this.scene.add.image(game.config.width/2,game.config.height/2,"eventBack");

        this.eventName = this.scene.add.text(this.eventBack.x,Math.floor(this.eventBack.height*0.25),this.event.eventName);
        this.eventName.setOrigin(0.5,0.5);

        this.eventImage = this.scene.add.image(this.eventBack.x,Math.floor(this.eventBack.height*0.5),this.event.eventImage);


        this.eventText = this.scene.add.text(this.eventBack.x,Math.floor(this.eventBack.height*0.7),this.event.eventText);
        this.eventText.setOrigin(0.5,0.5);
        
        // var flatButton = new FlatButton({scene:this, key:"button1",x:game.config.width/2,y:game.config.height - 100, event:'button_pressed',params:"dig"});
        // new FlatButton({scene, key, xPos, yPos, onEvent, params, text})
       

        this.add(this.eventBack);
        this.add(this.eventImage);
        this.add(this.eventName);
        this.add(this.eventText);
        //create buttons for event
        this.buttonList = []
        for(var i = 0; i < this.event.eventChoices.length;i++)
        {
            //place button
            
            this.buttonList[i] = new FlatButton({scene:this.scene,key:"choiceButton",x:this.eventBack.x,y:Math.floor(this.eventBack.height*0.8)+50*i,params:"testbutton"+i,text:this.event.eventChoices[i].text,textConfig:{color:"black"},event:this.event.eventChoices[i].event});
            this.add(this.buttonList[i]);
            //console.log(this.buttonList[i]);
        }

        emitter.on("button_pressed",this.buttonPressed,this);

        this.scene.add.existing(this);
    }
    buttonPressed(params){
        console.log("button! button! button!");
        this.removeAll(this);
    }


}