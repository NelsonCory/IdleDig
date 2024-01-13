/*
    Event Convention
        0-99 DEBUG
        100-199 THE ACADEMY
        200-299 THE DRAGON
        300-399 THE TYRANT
        900-999 RANDOM EVENTS
*/

class EventManager{
    constructor()
    {
        this.eventArr = []; // queue of events to deploy
        this.allEvents = new Map(); // all events loaded by game
    }
    addEvent(event){
       // console.log("add event to queue");
        //console.log(event);
        this.eventArr.push(event);
    }
    deployNextEvent(){
        if(this.eventArr.length>0){
            var nextEvent = this.eventArr.pop();
            //console.log("next");
            //console.log("deploy");
           // console.log(nextEvent);
            return nextEvent;
        }
    }
    loadEvents(data){
        //given an array of events, fill allEvents keyed, value {eventID, EventInfo}
        for(var i = 0; i < data.events.length;i++){
            this.allEvents.set(data.events[i].eventID, 
                            new EventInfo(data.events[i].eventID,
                                data.events[i].eventName,
                                data.events[i].eventImage,
                                data.events[i].eventText,
                                data.events[i].eventChoices
                                        ));
        }
       // console.log("map");
       // console.log(this.allEvents.get(0));
        //this.addEvent(this.allEvents.get(data)); //debug
    }
    queueNextEvent(eventID){
        console.log("queueing");
        console.log(this.allEvents.get(eventID))

        this.addEvent(this.allEvents.get(eventID));
       // console.log("Next Event will be: "+ eventID);
       this.shuffleArray(this.eventArr);
       
    }
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
}