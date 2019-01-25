import { Component, OnInit, OnDestroy } from '@angular/core';
/**
 * Make sure you add a proper observable from proper library
 */
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubscription: Subscription;
  customSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    /**
     * This is observable already available in 
     * utility of rxjs
     */

    const numbers = Observable.interval(1000);
    this.numberSubscription = numbers.subscribe(
      (data) => {
        console.log(data);
      }
    )


    /**
     * Observer - Observable is as good as Sender -  Reciever
      this.router.params.subscribe() is observer and in our custom code we write code which should react to change in params which is observable
     */

    const customObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package')
      }, 2000);
      setTimeout(() => {
        observer.next('second package')
      }, 4000);
      setTimeout(() => {
        observer.complete(); // After complete() is arrived, it ends, it wont be going further
      }, 5000);
      setTimeout(() => {
        observer.next('sixth package')
      }, 6000);
    })

    /**
     * Now we subscribe to the observer and get the changes
     */
    this.customSubscription = customObservable.subscribe((data: string) => {
      console.log(data)
    }, (error: string) => {
      console.log(error)
    }, () => {
      console.log('completed')
    })
  }

  public ngOnDestroy() {
    /**
     * Comment the below lines and see the console where it keeps sending number 
     * even on going to different components
     */
    this.numberSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}