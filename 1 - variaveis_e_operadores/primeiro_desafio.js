/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustível = 5.79;
const KmPorLitro = 10;
const distânciaViagemKm = 100;

const litrosConsumidos= distânciaViagemKm/KmPorLitro;
const gastoViagem = litrosConsumidos*precoCombustível


console.log( "O valor gasto foi de " + gastoViagem.toFixed(2));