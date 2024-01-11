class GameTimer{

    constructor(config){
        this.scene = config;
        this.status = "on";
        
        this.EventTimer = this.scene.time.addEvent({
                    delay: 30000,                // ms
                    callback: this.onEventFire,
                    loop: true,
                    paused: false, 
            });
        this.IncrementTimer = this.scene.time.addEvent({
                delay: 1000,                // ms
                callback: this.onIncrementFire,
                loop: true,
                paused:false
        });

    }
    onEventFire(){
        console.log("event fire triggered");
    }
    onIncrementFire(){
        //increase progress by prograte
        console.log("prog triggered");
        emitter.emit(G.MODIFY_PROGRESS,model.progRate);
    }
    pauseTimers(){
        console.log("pause triggered");
        this.EventTimer.paused = true;
        this.IncrementTimer.paused = true;
        this.status="off";
    }
    startTimers(){
        console.log("unpause timers");
        //reset EventTimer?
        this.EventTimer.paused = false;
        this.IncrementTimer.paused = false;
        this.status="on";
    }

}