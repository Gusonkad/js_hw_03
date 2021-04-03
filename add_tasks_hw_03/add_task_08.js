// add_task_08.js to home work 03
const productsPrice = { 
   apple: 20, 
   orange: 5, 
   cheese: 12, 
   pork: 45, 
   bread: 23 
} 
   const orderA = { 
      apple: 5, 
      cheese: 1, 
      bread: 3 
   }
   const orderB = { 
      orange: 10, 
      pork: 2, 
      bread: 1 
   }
   function getSum( obj ) {
      let getSum = 0;
      for( const el in obj ) {
        if( obj.hasOwnProperty( el ) ) {
         getSum += parseFloat( obj[el] );
        }
      }
      return getSum;
    }
          
console.log(`Сумма заказа А: ${getSum(orderA)}`);
console.log(`Сумма заказа В: ${getSum(orderB)}`);
