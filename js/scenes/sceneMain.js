class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load images or sounds
        this.load.image("button1","assets/dig-temp.png");
        this.load.image("digger","assets/mr-dig.png");
    }
    create() {
    
		emitter= new Phaser.Events.EventEmitter();
        controller = new Controller();

        //this.sb = new ScoreBox({scene:this});

        model.progress=0;
        console.log(model.progress);
        
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

        this.eventManager = new EventManager();
        this.eventManager.addEvent(new EventInfo("0","testName","testImage","eventText","testChoice"));
        this.eventManager.deployEvent();
    }
    buttonPressed(params)
    {
		if(params == "dig"){
			emitter.emit(G.MODIFY_PROGRESS,1);
		}
    }
    update() {
        // constant running loop
    }
}