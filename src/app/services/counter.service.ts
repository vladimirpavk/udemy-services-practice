export class CounterService{
    public stateChangedCounter: number = 0;
    
    constructor(){}
    public changeState(newState: string){
        this.stateChangedCounter++;
        console.log(newState+' '+this.stateChangedCounter);
    }
}