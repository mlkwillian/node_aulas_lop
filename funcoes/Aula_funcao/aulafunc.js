//exemplo 3
//const readline = require('readline-sync');

//function somar (n1, n2){
 //   let n3 = n1 + n2;
 //   console.log(n1, '+', n2, '=', n3);
//}

//let n1 = Number(readline.question("Primeiro numero:"));
//let n2 = Number(readline.question("Segundo numero:"));
 
//somar(n1, n2);




//exemplo 4
const readline = require('readline-sync');

function somar (n1, n2){
    let n3 = n1 + n2;
    return n3;
}
let n1 = Number(readline.question("Primeiro numero:"));
let n2 = Number(readline.question("Segundo numero:"));

console.log(n1, '+', n2, '=', somar(n1, n2));




//exemplo 5
//function somar (n1=0, n2=0){
//    let n3 = n1 + n2;
//    return n3;
//}
//console.log(somar());

//function func(n1){
 //   n1 = 8080;
//}

//n1 = 10
//func(n1)
//console.log(n1)




