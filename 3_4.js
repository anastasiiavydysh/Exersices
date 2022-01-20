/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(a) {
  var result = 0;
  if (a > 0 && a < 8) {
    switch (a) {
      case 1:
        result = "Воскресенье";
        break;
      case 2:
        result = "Понедельник";
        break;
      case 3:
        result = "Вторник";
        break;
      case 4:
        result = "Среда";
        break;
      case 5:
        "Четверг";
        break;
      case 6:
        result = "Пятница";
        break;
      case 1:
        result = "Суббота";
        break;
      default:
        result = 'Error: parameter type is not a Number';
        break;
    }
    return result;
  } else 
    return 'Error: parameter should be in the range of 1 to 7';  
}

console.log(f(1)); // Воскресенье
console.log(f(2)); // Понедельник
console.log(f(8)); // Error: parameter should be in the range of 1 to 7
console.log(f('1')); // Error: parameter type is not a Number
