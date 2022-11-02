/// <reference lib="webworker" />

import { PrimeComponent } from './prime/prime.component';

addEventListener('message', ({ data }) => {
   // const response = `worker response to ${data}`;
   const response = PrimeComponent.findNthPrimeNumber(parseInt(data));
   postMessage(response);
});