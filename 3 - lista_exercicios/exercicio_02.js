/*

2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5, Abaixo do peso;
- Entre 18.5 e 24.9, Peso normal;
- Entre 25 e 29.9, Acima do Peso;
- Entre 30 e 39.9, Obeso;
- Acima de 40, Obesidade Grave;

*/

const peso = 55;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);

console.log('Seu IMC é ' + imc.toFixed(2) + '!');

if (imc < 0) {
    console.log('NÃO EXISTE IMC NEGATIVO');
} else if (imc >= 0 && imc < 18.5) {
    console.log('ABAIXO DO PESO');
} else if (imc >= 18.5 && imc < 25) {
    console.log('PESO NORMAL');
} else if (imc >= 25 && imc < 30) {
    console.log('ACIMA DO PESO');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('OBESIDADE GRAVE');
}