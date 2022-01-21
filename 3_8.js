var arr = [1, 2, 3];
var i = 0;
 
function rec(arr) {
   console.log(arr[i]);
   i++;
   if (i < arr.length) rec(arr);
}
 
rec(arr);