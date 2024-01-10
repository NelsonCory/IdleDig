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

        //accept event
        emitter.on(G.CHOICE_MADE,this.choicemade);



    }
    setinfluence(influence){
        model.influence = influence;
    }
    modifyinfluence(val){
        var modelVal = model.influence;
        modelVal +=val;
        model.influence=modelVal;
    }
    setknowledge(knowledge){
        model.knowledge = knowledge;
    }
    modifyknowledge(val){
        var modelVal = model.knowledge;
        modelVal +=val;
        model.knowledge=modelVal;
    }
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
    choicemade(val){
        //for each item in val, modify that item
        if(val.knowledgeChange){
            model.knowledge += val.knowledgeChange;
        }
        if(val.influenceChange){
            model.influence += val.influenceChange;
        }
        if(val.artifactChange){
            model.artifact += val.artifactChange;
        }
        if(val.progRateChange){
            model.progRateChange = val.progRateChange;
        }
        if(val.nextEvent){
            //modify event manager
            model.eventManager.queueNextEvent(val.nextEvent);
        }


    }

}