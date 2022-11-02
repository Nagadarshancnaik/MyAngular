import { Component } from '@angular/core';
import { PrimeComponent } from './prime/prime.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker';


prime10 : number = 0;
prime10000 : number = 0;

find10thPrimeNumber() {
   this.prime10 = PrimeComponent.findNthPrimeNumber(10);
}

find10000thPrimeNumber() {
   if (typeof Worker !== 'undefined') {
      // Create a new
        const worker = new Worker(new URL('./app.worker', import.meta.url));

      worker.onmessage = ({ data }) => {
      this.prime10000 = data;
      };
      worker.postMessage(10000);
   } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
   }
}
}













// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./app.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage(1);
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }