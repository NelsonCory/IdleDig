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
        this.eventBack.setOrigin(0.5,0.5);

        this.eventName = this.scene.add.text(this.eventBack.x,Math.floor(this.eventBack.y - this.eventBack.height*0.37),this.event.eventName,  {fontFamily: 'Garamond', fontSize: 30, color: 'black'}); // 0.18
        this.eventName.setOrigin(0.5,0.5);

        this.eventImage = this.scene.add.image(this.eventBack.x,Math.floor(this.eventBack.y - this.eventBack.height*0.15),this.event.eventImage); // 0.35
        this.eventImage.setOrigin(0.5,0.5);

        this.eventText = this.scene.add.text(this.eventBack.x,Math.floor(this.eventBack.y + this.eventBack.height * 0.09),this.event.eventText, { fontFamily: 'Garamond', fontSize: 18, color: 'black',wordWrap: { width: this.eventBack.width - 70}, align: "center"  }); //0.55
        this.eventText.setOrigin(0.5,0.5);
        
        // var flatButton = new FlatButton({scene:this, key:"button1",x:game.config.width/2,y:game.config.height - 100, event:'button_pressed',params:"dig"});
        // new FlatButton({scene, key, xPos, yPos, onEvent, params, text})
       


        this.add(this.eventBack);
        this.add(this.eventImage);
        this.add(this.eventName);
        this.add(this.eventText);
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
           //{ fontFamily: 'Arial', fontSize: 15, color: 'black',wordWrap: { width: this.eventBack.width - 25 }
            this.buttonList[i] = new FlatButton({scene:this.scene,key:"choiceButton",x:this.eventBack.x,y:Math.floor(this.eventBack.y + this.eventBack.height * 0.25 )+67*i,
                                                        params:this.event.eventChoices[i].results,text:this.event.eventChoices[i].text,
                                                        textConfig:{color:"black", fontSize: 15, wordWrap: { width: this.eventBack.width * 0.57 }},event:"button_pressed"});
            
            this.add(this.buttonList[i]);
        }
        controller.gameTimer.pauseTimers();
        emitter.on(G.CHOICE_MADE,this.buttonPressed,this); //CHANGED FROM BUTTON_PRESS

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