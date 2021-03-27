// add_task_07.js
const Transaction = {
   DEPOSIT: 'Пополнение счета',
   CASHWITHDRAWAL: 'Снятие средств'
};
const account = {
   // Текущий баланс счета
   balance: 0,
   // История транзакций
   transactions: [],
   lastId: 0,
   // Deposit - пополнение счета + вызываем addTransaction
   deposit(amount) {
       let transaction = {};
       transaction.id = this.lastId + 1;
       this.lastId += 1;
       transaction.type = Transaction.DEPOSIT;
       transaction.amount = amount;
       this.addTransaction(transaction);
       this.balance += amount;
   },
// Withdrawal - снятие средств + вызываем addTransaction и проверяем достаточно ли средств
   withdraw(amount) {
       if (this.balance >= amount) {
           let transaction = {};
           transaction.id = this.lastId + 1;
           this.lastId += 1;
           transaction.type = Transaction.CASHWITHDRAWAL;
           transaction.amount = amount;
           this.addTransaction(transaction);
           this.balance -= amount;
       } else {
           console.log('На Вашем счету недостаточно средств');
       }
   },
   // Добавляем транзацию в свойство transactions
   // Принимает объект трназкции
   addTransaction(transaction) {
       this.transactions.push(transaction);
   },
//  Проверяем текущий баланс
   getBalance() {
       return this.balance;
   },
   //  Ищем и возвращаем объект транзации по id
   getTransactionDetails(id) {
       for (const transaction of this.transactions) {
           if (transaction.id === id) {
               return transaction;
           }
       }
   },
//   История транзакций по типам операций
   getTransactionTotal(type) {
       let total = 0;

       for (const transaction of this.transactions) {
           if (transaction.type === type) {
               total += transaction.amount;
           }
       }

       return total;
   }
};
account.deposit(8000);
console.log(account.getBalance());
account.withdraw(1200);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
account.withdraw(2000);
console.log(account.getBalance());
account.withdraw(600);
console.log(account.getBalance());
account.withdraw(3000);
console.log(account.getBalance());
account.withdraw(800);
console.log(account.getBalance());
account.withdraw(300);
console.log(account.getBalance());
account.deposit(3000);
console.log(account.getBalance());

console.log('Операция 1: ');
console.log(account.getTransactionDetails(1));
console.log('Операция 2: ');
console.log(account.getTransactionDetails(2));
console.log('Операция 3: ');
console.log(account.getTransactionDetails(3));
console.log('Операция 4: ');
console.log(account.getTransactionDetails(4));
console.log('Операция 5: ');
console.log(account.getTransactionDetails(5));
console.log('Операция 6: ');
console.log(account.getTransactionDetails(6));
console.log('Операция 7: ');
console.log(account.getTransactionDetails(7));
console.log('Операция 8: ');
console.log(account.getTransactionDetails(8));
console.log('Операция 9: ');
console.log(account.getTransactionDetails(9));

console.log(
   'Снятие средств: ' + account.getTransactionTotal(Transaction.CASHWITHDRAWAL));
console.log(
   'Пополнение счета на: ' + account.getTransactionTotal(Transaction.DEPOSIT));