/*

  1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a média = (nota 1 + nota 2 + nota 3) / 3;

  Classificação:
  - Média menor que 5, reprovação:
  - Média entre 5 e 7, recuperação:
  - Média acima de 7, passou de semestre:

*/

const nota1 = 9;
const nota2 = 12;
const nota3 = 12;

const media = (nota1 + nota2 + nota3) / 3;
console.log('A média das notas é ' + media)

if (media < 5) {
    console.log('REPROVADO')
} else if (media >= 5 && media <= 7) {
    console.log('RECUPERAÇÂO');
} else if (media > 7 && media <= 10) {
    console.log('PASSOU');

} else if (media > 10) {
    console.log('INVÁLIDO');
}

