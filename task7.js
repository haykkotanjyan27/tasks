// function contain(number, digit) {
//   if (digit < 10) {
//     return digit == number ? "yes" : "no";
//   }
//   let lasNumber = digit % 10;
//   digit = (digit - lasNumber) / 10;
//   if (lasNumber === number) {
//     return "yes";
//   }
//   return contain(number, digit);
// }
// console.log(contain(8, 46852));

// const fib = (index) => {
//   if (index < 2) {
//     return index;
//   }
//   return fib(index - 1) + fib(index - 2);
// };
// console.log(fib(6));


//closer
// const sum = (a) => {
//   let b = a;
//   return () => {
//     b++;
//     return b;
//   };
// };

// const func = sum(5);
