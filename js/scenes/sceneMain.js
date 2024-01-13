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
        this.load.json({key:"randomData",
                        url:"js/data/random.json"});
        this.load.json({key:"dragonData",
                        url:"js/data/dragon.json"});
         this.load.json({key:"tyrantData",
                        url:"js/data/tyrant.json"});
    }
    create() {
        
        //var temp = new EventBox({scene:this, event:testEvent});


        //prepare model with quests & random events
        this.initializeQuests()
        
		emitter= new Phaser.Events.EventEmitter();
        controller = new Controller();
        controller.gameTimer = new GameTimer(this);
        
        //initialize events

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
    }
    buttonPressed(params)
    {
		if(params == "dig" && controller.gameTimer.status == "on"){
			emitter.emit(G.MODIFY_PROGRESS,1);
		}
        //process choices

        if(params.knowledgeChange >= 0 ){
            console.log("here somehow");
            emitter.emit(G.CHOICE_MADE,params);
        }

    }
    update() {
        if(model.artifact < 0){ // game over
            this.scene.start("SceneGameOver");
        }
    }
    onEvent(){ //test
        emitter.emit(G.MODIFY_PROGRESS,model.progRate);
    }
    initializeQuests(){
        var academyData = this.cache.json.get("academyData");
        var dragonData = this.cache.json.get("dragonData");
        var tyrantData = this.cache.json.get("tyrantData");
        var randomData = this.cache.json.get("randomData");

        model.eventManager.loadEvents(academyData);
        model.eventManager.loadEvents(dragonData);
        model.eventManager.loadEvents(tyrantData);
        model.eventManager.loadEvents(randomData);
        

        //add first events to event queue
        model.eventManager.queueNextEvent(100); // start Academy Questline
        model.eventManager.queueNextEvent(200); // start Tyrant Questline
        model.eventManager.queueNextEvent(300); // start Dragon Questline
        
        //add random events to queue. Ugly, but submissions end tonight for jam.
        model.eventManager.queueNextEvent(900);
        model.eventManager.queueNextEvent(901);
        model.eventManager.queueNextEvent(902);
        model.eventManager.queueNextEvent(903);
        model.eventManager.queueNextEvent(904);
        model.eventManager.queueNextEvent(905);
        model.eventManager.queueNextEvent(906);
        model.eventManager.queueNextEvent(907);

    }
}