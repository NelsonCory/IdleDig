class EventManager{
    constructor()
    {
        this.eventArr = [];
    }
    addEvent(event){
        this.eventArr.push(event);
    }
    deployNextEvent(){
        if(this.eventArr.length>0){
            var nextEvent = this.eventArr.pop();
            return nextEvent;
        }
    }
    

}