class EventChoice{

    constructor(config){
        
        this.text = config.text;
        this.results = config.results;
        //console.log(config);
        //results is an object detailing all changes
        /*
        {
            progChange: 0,
            progRateChange: 0,
            artifactChange: 0,
            influenceChange:0,
            knowledgeChange:0,
            nextEvent: 23
        }
        then changes changes may be emitted on button press.
    */


    }
}