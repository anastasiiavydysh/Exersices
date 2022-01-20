/*
####Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/

function f(a, b, c) {
  var result = 0;
  if (a ^ 0 === a && b ^ 0 === b && c ^ 0 === c)
    result = (a - b) / c;
  else
    return 'Error: all parameters type should be a Number';
  return result;
}

console.log(f(9, 3, 2)); // 3
console.log(f('s', 9, 3)); // Error: all parameters type should be a Number
