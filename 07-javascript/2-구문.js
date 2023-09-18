const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;

console.log(a, b, c);

let d = 0;
let e = 0;
let f = 0;
const avv = [1, 2, 3];
// [d, e, f] = avv;
// console.log(d, e, f);
[, e, f] = avv;

console.log(e, f);

const arr3 = [6, 7, 8];
const [g, ...rest] = arr3;
console.log(g, rest);
