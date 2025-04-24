//desenha uma moldura em uma frase
const readline = require('readline-sync');

const ch = '█'

function barra(qtde) {
  for(let i=0; i<qtde+4; i++){
    process.stdout.write(ch);
  }
  console.log();
}

const frase = readline.question('Digite uma frase: ');

barra(frase.length);
barra(frase.length);


console.log(`${ch} ${frase} ${ch}`);

barra(frase.length);
barra(frase.length);







//const frase = readline.question('Digite uma frase: ')

//const ch = '█'

//for(let i=0; i<frase.length+4; i++){
  //  process.stdout.write(ch);
//}

//console.log(`\n${ch} ${frase} ${ch}`);

//for(let i=0; i<frase.length+4; i++){
  //  process.stdout.write(ch);
//}