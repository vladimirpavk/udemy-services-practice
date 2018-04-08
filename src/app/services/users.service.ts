import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable()
export class UsersService{    
    public activeUsers: string[] = ['Max', 'Anna'];
    public inactiveUsers: string[] = ['Chris', 'Manu'];

    public onSetToInactive(id: number):void {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        
        this.counterService.changeState('Inactive');
    }

    public onSetToActive(id: number):void {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);

        this.counterService.changeState('Active');
    }

    constructor(private counterService:CounterService){}
}