import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    /*
    * transform accepts valueinput and args separated with :   
    */
    transform(value: any, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    }
}