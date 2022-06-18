// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: 
// 	Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

//constantes utilizadas para testar o código
const entrada1 = 19;
const entrada2 = 21;

//função que verifica se um número faz parte da sequência de fibonacci
const verificaFib = entrada => {
    if (entrada < 0) {
        //retorna false em caso de número negativo
        return false;
    } else if (entrada == 0 || entrada == 1) {
        //retorna true em caso da entrada ser 0 ou 1
        return true;
    } else {
        //variáveis auxiliares
        let n1 = 1;
        let n2 = 1;
        let n3 = 2;
        while (n3 <= entrada) {
            if (n3 == entrada) {
                //retorna true no caso da entrada fazer parte da sequência
                return true;
            }
            n1 = n2;
            n2 = n3;
            n3 = n1 + n2;
        }
        //retorna falso no caso da entrada não fazer parte da sequência
        return false;
    }
}

//testando o código
console.log(`O número ${entrada1} faz parte da quência de fibonacci? R: ${verificaFib(entrada1)}.`);
console.log(`O número ${entrada2} faz parte da quência de fibonacci? R: ${verificaFib(entrada2)}.`);