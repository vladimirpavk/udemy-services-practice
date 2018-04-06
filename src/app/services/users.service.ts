import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()
export class UserService{    
    public activeUsers: string[] = ['Max', 'Anna'];
    public inactiveUsers: string[] = ['Chris', 'Manu'];

    public onSetToInactive(id: number):void {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    public onSetToActive(id: number):void {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    constructor(private counterService:CounterService){}
}