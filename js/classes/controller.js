class Controller
{
    constructor()
    {
        emitter.on(G.SET_PROGRESS,this.setprogress);
        emitter.on(G.MODIFY_PROGRESS,this.modifyprogress);

        emitter.on(G.SET_ARTIFACT,this.setartifact);
        emitter.on(G.MODIFY_ARTIFACT,this.modifyartifact);

        emitter.on(G.SET_INFLUENCE,this.setinfluence);
        emitter.on(G.MODIFY_INFLUENCE,this.modifyinfluence);

        emitter.on(G.SET_KNOWLEDGE,this.setknowledge);
        emitter.on(G.MODIFY_KNOWLEDGE,this.modifyknowledge);

    }
    //TODO-create getters and setters for influence and knowledge

    setprogress(progress)
    {
        model.progress=progress;
    }
    modifyprogress(val){
        var modelVal = model.progress;
        modelVal += val;
        model.progress=modelVal;
    }
    setartifact(artifact)
    {
        model.artifact=artifact;
    }
    modifyartifact(val){
        var modelVal = model.artifact;
        modelVal +=val;
        model.artifact=modelVal;
    }

}