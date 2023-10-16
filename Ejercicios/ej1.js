//Ejercicio 1: Suma array multidimensional

const arrayMultiSum = (arr) => arr.flat(Infinity).reduce((a,e)=>a+e,0);
let arr = [];
console.log(arr, "->", arrayMultiSum(arr));

arr = [4, 8, 3]; //15
console.log(arr, "->", arrayMultiSum(arr));

arr = [[2, 4], 5, [6, 7]]; //24
console.log(arr, "->", arrayMultiSum(arr));

arr = [4, 8, 3];
console.log(arr, "->", arrayMultiSum(arr));