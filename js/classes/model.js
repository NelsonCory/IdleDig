class Model
{
    constructor()
    {
        this._energy=0;
    }

    set energy(val)
    {
        this._energy=val;
        emitter.emit(G.ENERGY_UPDATED);
    }
    get energy(){
        return this._energy;
    }
}