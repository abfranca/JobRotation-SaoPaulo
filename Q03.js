// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// 	• O menor valor de faturamento ocorrido em um dia do mês;
// 	• O maior valor de faturamento ocorrido em um dia do mês;
// 	• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// 	a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// 	b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

//local do arquivo com os dados utilizados no programa
const url = './dados.json';
//array com os dados recuperados do arquivo json
const dados = require(url);

//funcao que retorna o menor valor de faturamento ocorrido em um dia do mês
const menorValor = dados => {
    let resultado = [...dados].sort((a, b) => a.valor - b.valor).filter(e => e.valor > 0)[0];
    return resultado;
}

//funcao que retorna o maior valor de faturamento ocorrido em um dia do mês
const maiorValor = dados => {
    let resultado = [...dados].sort((a, b) => b.valor - a.valor)[0];
    return resultado;
}

//função que retorna o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
const maioresQueMedia = dados => {
    let naoNulos = [...dados].filter(e => e.valor > 0);
    let total = 0;
    naoNulos.forEach(e => total += e.valor);
    let media = total / naoNulos.length;
    return naoNulos.filter(e => e.valor > media).length;
}

//testando o código
console.log(`O menor valor de faturamento ocorreu no dia ${menorValor(dados).dia} e foi de R$${menorValor(dados).valor.toFixed(2).replace('.', ',')}.`);
console.log(`O maior valor de faturamento ocorreu no dia ${maiorValor(dados).dia} e foi de R$${maiorValor(dados).valor.toFixed(2).replace('.', ',')}.`);
console.log(`Em ${maioresQueMedia(dados)} dia(s) o valor de faturamento diário foi superior à média mensal.`);