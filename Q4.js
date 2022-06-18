// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// 	SP – R$67.836,43
// 	RJ – R$36.678,66
// 	MG – R$29.229,88
// 	ES – R$27.165,48
// 	Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

//array com os estados e o faturamento dos mesmos
const estados = [
    {
        estado: 'SP',
        faturamento: 'R$67.836,43'
    },
    {
        estado: 'RJ',
        faturamento: 'R$36.678,66'
    },
    {
        estado: 'MG',
        faturamento: 'R$29.229,88'
    },
    {
        estado: 'ES',
        faturamento: 'R$27.165,48'
    },
    {
        estado: 'Outros',
        faturamento: 'R$19.849,53'
    }
];

//função que retorna o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora
const percentual = estados => {
    let total = 0;
    let resultado = [...estados]
    resultado.forEach(e => total += parseFloat(e.faturamento.replace('R$', '').replace('.', '').replace(',', '.')));
    resultado.forEach(e => e.percentual = ((parseFloat(e.faturamento.replace('R$', '').replace('.', '').replace(',', '.')) / total) * 100).toFixed(2));
    return resultado;
}

//testando o código
const printResultado = () => {
    let resultado = percentual(estados);
    console.log('Percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:');
    resultado.forEach(e => console.log(`${e.estado}: ${e.percentual}%.`));
}
printResultado();