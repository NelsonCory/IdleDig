class Model
{
    constructor()
    {
        this._progress=0;
        this._progGoal=10;
        this._artifact = 0;
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