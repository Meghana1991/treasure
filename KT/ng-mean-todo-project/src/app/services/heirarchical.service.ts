import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()

export class ModifyService {
    /**
     * I am using @Injectable as i want to inject something to this service
     */
    customArr = [1, 2, 3];

    constructor(private loggerServ: LoggerService) { }
    
    public getData() {
        this.loggerServ.logData("Hi");
        return this.customArr
    }

    public addData(data) {
        this.customArr.push(data)
    }
}