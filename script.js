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

// function number(res){
//     let a = 3,
//         b = 5,
//         c = 7
//         if(res % a == 0 || res % b == 0 || res % c == 0){
//             return `${res} is a multiple`
//         }else{
//             return `${res} is not multiple ${a} ${b} ${c}`
//         }
// }
// console.log(number(15));


