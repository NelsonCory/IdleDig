class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load images or sounds
        this.load.image("button1","assets/dig-temp.png");
        this.load.image("digger","assets/mr-dig.png");
        this.load.image("eventBack","assets/eventBackground.png");
        this.load.image("testImage","assets/testImage.png");
        this.load.image("choiceButton","assets/choiceButton.png");
    
        //load data
        this.load.json({key:"academyData",
                        url:"js/data/academy.json"});
    
    }
    create() {
        
        /*
        TODO
            Fundamental
                Implement Timer (https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/)
                    - timer based on progRate
                Finish event system
            Develop events for questlines as well as random events

            Art&music, animations 

        */
        
        
       

        //process event data
        var academyData = this.cache.json.get("academyData");
        model.eventManager.loadEvents(academyData);

		emitter= new Phaser.Events.EventEmitter();
        controller = new Controller();
        controller.gameTimer = new GameTimer(this);
        
        model.progRate = 1; //test
        model.progress=0;
        //console.log(model.progress);
        
		//should scale based on button size
        var flatButton = new FlatButton({scene:this, key:"button1",x:game.config.width/2,y:game.config.height - 100, event:'button_pressed',params:"dig"});
		var digger = this.add.image(game.config.width/2,game.config.height/2,"digger");

        //create incremental boxes
        this.pb = new ProgressBox({scene:this});
        this.ab = new ArtifactBox({scene:this});
        this.ib = new InfluenceBox({scene:this});
        this.kb = new KnowledgeBox({scene:this});

		//initialize placement of UI elements
		var gridConfig = {rows:11,cols:11,scene:this};
		this.alignGrid = new AlignGrid(gridConfig);
		//this.alignGrid.showNumbers();
		this.alignGrid.placeAtIndex(104,this.pb);
        this.alignGrid.placeAtIndex(1,this.ib);
        this.alignGrid.placeAtIndex(5,this.ab);
        this.alignGrid.placeAtIndex(9,this.kb);
        this.alignGrid.placeAtIndex(49,digger);
		//this.alignGrid.placeAtIndex(104,this.flatButton);
		//initialize emitters
        emitter.on("button_pressed",this.buttonPressed,this);

        var testEvent = model.eventManager.deployNextEvent();

        var temp = new EventBox({scene:this, event:testEvent});

    }
    buttonPressed(params)
    {
		if(params == "dig" && controller.gameTimer.status == "on"){
			emitter.emit(G.MODIFY_PROGRESS,1);
		}

        //process choices
        if(!(typeof myVar === 'string')){
            console.log("params:" + params);
            emitter.emit(G.CHOICE_MADE,params);
        }
    }
    update() {
        // constant running loop
    }
    onEvent(){ //test
        emitter.emit(G.MODIFY_PROGRESS,model.progRate);
    }
}