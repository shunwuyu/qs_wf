// require('babel-polyfill');

const arr = Array.from([1,2,3]);
console.log(arr);

const arr1 = Array.from([1,2,3], x => x + x);
console.log(arr1);

const arr3 =  arr.map(item => {
  return item * 2;
})
console.log(arr3);