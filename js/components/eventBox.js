class EventBox extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene)
        this.scene = config.scene;

        //eventID
        //EventName
        //eventPicture
        //content (blurb)
        //choices - array of buttons

        this.eventName = this.scene.add.text(0,0,"TEST TITLE");
        this.eventText = this.scene.add.text(0,10,"STORY TIME STORY TIME");
        

    }


}