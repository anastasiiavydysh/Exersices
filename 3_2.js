/*####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

function f(...a) {
var sum = 0;
  for (let i = 0; i < a.length; i++) {
  if(a[i]^0 === a[i])
  	sum += a[i];
  else
  	return "Error: all parameters type should be a Number";
  }
  return sum;
}

console.log(f(1,2,3)); // 6
console.log(f(1,1,1,1,1,1,1,1)); // 8
console.log(f(1,2,'s',4)); // Error: all parameters type should be a Number