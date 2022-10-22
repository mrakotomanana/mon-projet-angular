import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, Observer, of, range, Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  status = '';
  valueChange: Array<number> = [];
  subscription: Subscription;


  constructor() { }

  ngOnInit(): void {
    // const observable: Observable<number> = of(1, 2, 3, 4);
    // const observable: Observable<number> = range(12, 20);
     const tableau = [12, 23, 5];
    // const observable: Observable<number> = from(tableau);
    // const observer: Observer<number> = {
    //   next: (value) => {
    //     this.valueChange.push(value);
    //   },
    //   error: (error) => {
    //     this.status = error;
    //   },
    //   complete: () => {
    //     this.status = 'fini';
    //   }
    // }

		// const observable: Observable<number> = from(tableau); // interval(1000) timer(3000, 1000)
		   const observable: Observable<number> = interval(1000).pipe(take(10));
     this.subscription = observable.subscribe(
      (value) => {
      this.valueChange.push(value);
      },
      (error) => {
      this.status = error;
      },
      () => {
      this.status = 'fini';
      }
      );
   }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe()
  // }
}
