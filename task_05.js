// task_05.js
const products = [
   { name: 'Радар', price: 1300, quantity: 4 },
   { name: 'Сканер', price: 2700, quantity: 3 },
   { name: 'Дроид', price: 400, quantity: 7 },
   { name: 'Захват', price: 1200, quantity: 2 },
 ];
const getAllPropValues = function(arr, prop) {
   return arr.reduce(function(result, item) {
      if (result.indexOf(item[prop]) == -1 && // if need unique values
          typeof item[prop] != "undefined")   // if don't want undefined's
        result.push(item[prop]);
      return result;
    }, []);
  }
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []



