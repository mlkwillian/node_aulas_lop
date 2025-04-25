const readline = require('readline-sync');

 function somar (n1, n2){
     let n3 = n1 + n2;
     return n3;
 }
 function subtrair (n1, n2){
     let n3 = n1 - n2;
     return n3;
 }
 function multi (n1, n2){
     let n3 = n1 * n2;
     return n3;
 }
 function divi (n1, n2){
     let n3 = n1 / n2;
     return n3;
 }

 let conta = readline.question("Digite a operação: ").split(' ');

 if(conta[1] == '+' | conta[1] == 'mais') {
     console.log(conta[0], '+', conta[2], '=', somar(Number(conta[0]), Number(conta[2])));
 } else if (conta[1] == '-' | conta[1] == 'menos') {
     console.log(conta[0], '-', conta[2], '=', subtrair(Number(conta[0]), Number(conta[2])));
 } else if (conta[1] == '*' | conta[1] == 'x' | conta[1] == 'vezes') {
     console.log(conta[0], '*', conta[2], '=', multi(Number(conta[0]), Number(conta[2])));
 } else if (conta[1] == '/' | conta[1] == 'dividido') {
     console.log(conta[0], '/', conta[2], '=', divi(Number(conta[0]), Number(conta[2])));
 }


