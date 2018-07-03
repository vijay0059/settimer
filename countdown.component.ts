import { timer } from 'rxjs'; // (for rxjs < 6) use 'rxjs/observable/timer'
import { take, map } from 'rxjs/operators';

@Component({
   selector: 'my-app',
   template: `<h2>{{countDown | async}}</h2>`
})
export class App {
   countDown;
   count = 60;

   constructor() {

       this.countDown = timer(0,1000).pipe(
          take(this.count),
          map(()=> --this.count)
       );
   }
}
