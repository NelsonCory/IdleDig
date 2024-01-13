class GameTimer{

    constructor(config){
        this.scene = config;
        this.status = "on";
        
        this.EventTimer = this.scene.time.addEvent({
                    delay: 5000,                // ms 30000
                    callback: this.onEventFire,
                    callbackScope: this,
                    loop: true,
                    paused: false, 
            });
        this.IncrementTimer = this.scene.time.addEvent({
                delay: 1000,                // ms
                callback: this.onIncrementFire,
                callbackScope: this,
                loop: true,
                paused:false
        });

    }
    testFunction(){
        console.log("this works somehow");
    }
    pauseTimers(){
        console.log("pause triggered");
        this.EventTimer.paused = true;
        this.IncrementTimer.paused = true;
        this.status="off";
    }

    onIncrementFire(){
        //increase progress by prograte
        console.log("prog triggered");
        console.log(model.progRate);
        emitter.emit(G.MODIFY_PROGRESS,model.progRate);
    }

    startTimers(){
        console.log("unpause timers");
        //reset EventTimer?
        this.EventTimer.paused = false;
        this.IncrementTimer.paused = false;
        this.status="on";
    }
    onEventFire(){
        
        console.log("event fire triggered");
        console.log(model.eventManager.eventArr);
        var nextEvent = model.eventManager.deployNextEvent();
        console.log(nextEvent);
        if(nextEvent){
            var temp = new EventBox({scene:this.scene, event:nextEvent});
            this.pauseTimers();
            setTimeout(()=>{ //(function, time)
                
                console.log("back in action");
             },2000);
        }
    }



}