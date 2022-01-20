/*
####Задача 7

Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
*/

function getDivisors(a) {
  if (typeof(a) === typeof(0)) {
    if (a <= 0) {
      return "Error: parameter can't be a 0";
    }
    let i = 1;
    var mas = [];
    while (i <= a) {
      if (a % i == 0)
        mas.push(i);
      i++;
    }
    return mas;
  }
  return "Error: parameter type is not a Number";
}
console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0
