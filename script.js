//.3 Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the last digit of the inserted numberis 0, numberremains the same.
function lastNum(a){
    if(a % 10 == 0){
        return a
    }else{
        let n = a % 10
        a -= n
        a /= 10
        n += ""
        n += a
        return Number(n)
    }
}
console.log(lastNum(500));

let a=488



//.4 Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message

function multiple(a){
   if(a % 3 == 0 || a % 5 == 0 || a % 7 == 0){
       return "multiple"
   }else{
       return "It is`nt multiple"
   }
}
console.log(multiple(19));


