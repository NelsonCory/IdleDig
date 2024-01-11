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
        //console.log(this.event.eventChoices);
        for(var i = 0; i < this.event.eventChoices.length;i++)
        {
            //place button

            /*
            console.log("loop event");
            console.log(this.event);
            console.log(this.event.eventChoices[i]);
            console.log(this.event.eventChoices[i].results);
            */
            this.buttonList[i] = new FlatButton({scene:this.scene,key:"choiceButton",x:this.eventBack.x,y:Math.floor(this.eventBack.height*0.8)+50*i,
                                                        params:this.event.eventChoices[i].results,text:this.event.eventChoices[i].text,
                                                        textConfig:{color:"black"},event:"button_pressed"});
            this.add(this.buttonList[i]);
        }
        controller.gameTimer.pauseTimers();
        emitter.on("button_pressed",this.buttonPressed,this);

        this.scene.add.existing(this);
    }
    buttonPressed(params){
        //var choiceResults = this.event.eventChoices[parseInt(params)].eventResults;
       // emitter.emit(G.CHOICE_MADE,choiceResults);

       if(params != "dig"){
            controller.gameTimer.startTimers();
            this.removeAll(this);
       }
    }


}