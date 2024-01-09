class EventManager{
    constructor()
    {
        this.eventArr = [];
    }
    addEvent(event){
        this.eventArr.push(event);
    }
    deployEvent(){
        console.log(this.eventArr);
    }
    

}