const numero = 10;

const isNumeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){
    console.log('O número é inválido');
}else if(isNumeroDivisivelPor5){
    console.log('sim');
}else{
    console.log('não');
}



