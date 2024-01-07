class Controller
{
    constructor()
    {
        emitter.on(G.SET_ENERGY,this.setEnergy);
        emitter.on(G.MODIFY_ENERGY,this.modifyEnergy);
    }
    setEnergy(energy)
    {
        model.energy=energy;
    }
    modifyEnergy(val){
        var modelVal = model.energy;
        modelVal += val;
        model.energy=modelVal;
    }
}