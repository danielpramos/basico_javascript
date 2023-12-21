/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço etanol;
2 - Preço gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

*/
const precoAlcool = 5.79;
const precoGasolina = 6.66;
const KmPorLitroAlcool = 10;
const KmPorLitroGasolina = 15;
const distânciaViagemKm = 100;
const tipoCombustivel = `Gasolina`;


if (tipoCombustivel === `Gasolina`) {
    const litrosConsumidos = distânciaViagemKm / KmPorLitroGasolina;
    const gastoViagem = litrosConsumidos * precoGasolina;
    console.log("O valor gasto foi de " + gastoViagem.toFixed(2));
} else {
    const litrosConsumidos = distânciaViagemKm / KmPorLitroAlcool;
    const gastoViagem = litrosConsumidos * precoAlcool;
    console.log("O valor gasto foi de " + gastoViagem.toFixed(2));
}
