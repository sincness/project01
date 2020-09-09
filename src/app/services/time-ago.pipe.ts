import { Pipe, PipeTransform } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { of, interval } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: any): Observable<string> | string {
    date = new Date(date);
    const delta = Math.floor((new Date().getTime() - new Date(date).getTime())/1000);

    if (delta < 30) return 'Nu';
    if (delta > 604800) return new Date(date).toLocaleDateString('da-dk', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });




    // All values are in seconds
    const timeIntervals = {
      'år': 31536000,
      'måned': 2592000,
      'uge': 604800,
      'dag': 86400,
      'time': 3600,
      'minut': 60,
      'sekund': 1,
    };
    let counter;
    // let observ$ = interval(60000)

    // observ$.pipe(takeWhile(delta => delta < 60))
    // .subscribe(x => {
    //   console.log(x+1);
    //   counter++;
    //   console.log(counter);
    //   console.log('counter var changed...');
    //   return `${counter} ${counter <= 1 ? 'minut siden' : 'minutter siden'}`

    // })

    for(const i in timeIntervals) {


      counter = Math.floor(delta / timeIntervals[i]);
      // console.log("Counter is: "+ counter);
      if(counter > 0) {
        if(counter === 1) {
          // single 1 dag siden
          return counter + ' ' + i + ' siden'
        } else {
          switch(i) {
            case 'sekund':
              return counter + ' ' + i + 'er siden';
              break;
            case 'minut':
              return counter + ' ' + i + 'ter siden';
              break;
            case 'time':
              return counter + ' ' + i + 'r siden';
              break;
            case 'dag':
              return counter + ' ' + i + 'e siden';
              break;
            case 'uge':
              return counter + ' ' + i + 'r siden';
              break;
            case 'måned':
              return counter + ' ' + i + 'er siden';
              break;
            case 'år':
              return counter + ' ' + i + ' siden';
              break;



          }

        }
      }

    }
  }



}
