// add_task_09.js to home work 03
const object1 = { 
}
const object2 = { 
   name: 'user',
   age: 21,  
}
let isObjectEmpty = object => !Object.getOwnPropertySymbols(object).length && !Object.getOwnPropertyNames(object).length;
console.log(isObjectEmpty(object1));  
console.log(isObjectEmpty(object2));  

