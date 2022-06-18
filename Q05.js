// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// 	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// 	b) Evite usar funções prontas, como, por exemplo, reverse;

//constante com a string utilizada para testar o código
const palavra = 'Job Rotation - São Paulo';

//função que inverte os caracteres de um string
const inverteString = palavra => {
    let temp = [...palavra];
    let resultado = [];
    temp.forEach(e => resultado.unshift(e));
    return resultado.join('');
}

//testando o código
console.log(inverteString(palavra));