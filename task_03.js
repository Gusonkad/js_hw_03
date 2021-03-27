// task_03.js
const findBestEmployee = function(employees) {
   let max = 0;
   let bestEmployee;
   for (const employee in employees) {
       const tasksSum = employees[employee];
       if (tasksSum > max) {
           max = tasksSum;
           bestEmployee = employee;
       }
   }
   return bestEmployee;
}
console.log(findBestEmployee({
     ann: 29,
     david: 35,
     helen: 1,
     lorence: 99,
   }),); // lorence
 console.log(findBestEmployee({
     poly: 12,
     mango: 17,
     ajax: 4,
   }),); // mango
 console.log(findBestEmployee({
     lux: 147,
     david: 21,
     kiwi: 19,
     chelsy: 38,
   }),); // lux