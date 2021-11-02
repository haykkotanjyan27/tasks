//.3 Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the last digit of the inserted numberis 0, numberremains the same.
// function lastNum(a){
//     if(a % 10 == 0){
//         return a
//     }else{
//         let n = a % 10
//         a -= n
//         a /= 10
//         n += ""
//         n += a
//         return Number(n)
//     }
// }
// console.log(lastNum(500));

//.4 Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message

// bolor zuyg tvere bajanel 2 (grel map-ov)
//zuyg kent tvere gtnel filter-ov
// sort method

// function number(res) {
//   let arr = [3, 5, 7, 1, 21];
//   let newArr = arr.filter((item) => res % item === 0);
//   if (newArr.length === 0) {
//     return;
//   }
//   if (newArr.length === 1) {
//     return `${newArr[0]}`;
//   }
//   let newArr2 = newArr.filter(
//     (item, index, arr) => index !== newArr.length - 1
//   );
//   return `${newArr2}, ${newArr[newArr.length - 1]}`;
// }
// console.log(number(21));
