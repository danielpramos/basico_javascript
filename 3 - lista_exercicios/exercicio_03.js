/*

3) Elabore  um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
 - À vista Débito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Em duas vezes, preço normal de etiqueta mais juros de 10%;

*/


const valorProduto = 100;
const formaPagamento =4;



if (formaPagamento === 1) {
    const desconto10 = valorProduto * (10 / 100);
    const debitoAVista = valorProduto - desconto10;
    console.log(debitoAVista);

} else if (formaPagamento === 2) {
    const desconto15 = valorProduto * (15 / 100);
    const dinheiroPixVista =valorProduto - desconto15;
    console.log(dinheiroPixVista);

} else if (formaPagamento === 3) {
    console.log(valorProduto);

} else if (formaPagamento === 4) {
    console.log(valorProduto * (10 / 100) + valorProduto);

}


