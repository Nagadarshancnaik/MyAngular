
export class PrimeComponent
{
   static isPrimeNumber(num : number) : boolean {
      if(num == 1) return true;

      let idx : number = 2;
      for(idx = 2; idx < num / 2; idx++)
      {
         if(num % idx == 0)
            return false;
      }
      console.log(num);

      return true;
   }

   static findNthPrimeNumber(num : number) : number {
      let idx : number = 1;
      let count = 0;

      while(count < num) {
         if(this.isPrimeNumber(idx))
            count++;

         idx++;
      }

      return idx - 1;
   }
}