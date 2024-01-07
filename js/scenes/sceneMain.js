class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load images or sounds
        this.load.image("button1","assets/dig-temp.png");
    }
    create() {
    
		emitter= new Phaser.Events.EventEmitter();
        controller = new Controller();

        this.sb = new ScoreBox({scene:this});

        model.energy=0;
        console.log(model.energy);
        
		//should scale based on button size
        var flatButton = new FlatButton({scene:this, key:"button1",x:game.config.width/2,y:game.config.height - 100, event:'button_pressed',params:"dig"});
		
		
		//initialize placement of UI elements
		var gridConfig = {rows:11,cols:11,scene:this};
		this.alignGrid = new AlignGrid(gridConfig);
		//this.alignGrid.showNumbers();
		this.alignGrid.placeAtIndex(16,this.sb);
		//this.alignGrid.placeAtIndex(104,this.flatButton);
		//initialize emitters
        emitter.on("button_pressed",this.buttonPressed,this);
    }
    buttonPressed(params)
    {
		if(params == "dig"){
			emitter.emit(G.MODIFY_ENERGY,1);
		}
        console.log(params);
    }
    update() {
        // constant running loop
    }
}