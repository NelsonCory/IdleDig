class Model
{
    constructor()
    {
        this._progress=0;
        this._progRate=0; // prog per second
        this._progGoal=10;
        this._artifact = 0;
        this._influence = 0;
        this._knowledge = 0;
        this.eventManager = new EventManager();
    }
    //implement knowledge and influence
    set progRate(val){
        this._progRate = val;
        emitter.emit(G.PROG_UPDATED);
    }
    get progRate()
    {
        return this._progRate;
    }

    set influence(val){
        this._influence = val;
        emitter.emit(G.INFLUENCE_UPDATED);

    }
    get influence(){
        return this._influence;
    }
    
    set knowledge(val){
        this._knowledge = val;
        emitter.emit(G.KNOWLEDGE_UPDATED);

    }
    get knowledge(){
        return this._knowledge;
    }

    set artifact(val){
        this._artifact = val;
        emitter.emit(G.ARTIFACT_UPDATED);

    }
    get artifact(){
        return this._artifact;
    }

    set progGoal(val)
    {
        this._progGoal=val;
        //emitter.emit(G.PROGRESS_UPDATED);
    }
    get progGoal(){
        return this._progGoal;
    }
    set progress(val)
    {
        this._progress=val;
        emitter.emit(G.PROGRESS_UPDATED);
    }
    get progress(){
        return this._progress;
    }
}