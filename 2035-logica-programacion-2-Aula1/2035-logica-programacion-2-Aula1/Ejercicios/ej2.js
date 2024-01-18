/*
 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir
 de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/

function imc(peso, altura){
    return peso / (altura ** 2)
}

console.log(imc(50, 1.56))

/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/

function factorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        return numero * factorial(numero-1);
    }    
}

console.log(factorial(5))

/*
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
*/

function convertirDolarAReal(dolares){
    return dolares * 4.80;
}

console.log(convertirDolarAReal(50));

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando 
la altura y la anchura que se proporcionarán como parámetros.
*/

function areaYPerimetroCircular(altura, ancho){
    let area = altura * ancho;
    let perimetro = 2 * (altura + ancho) 
    console.log(`Area = ${area}`);
    console.log(`Perimetro = ${perimetro}`);
}

console.log(area(12, 15));

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando 
su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function areaCircular(radio){
    let area = 3.14 * (radio ** 2);
    let perimetro = 2 * 3.14 * radio;
    console.log('Area: ' + area);
    console.log('Perimetro: ' + perimetro);
}



/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

function tabla(numero){
    var i = 1;
    while (i <= 10) {
        console.log( `${numero} x ${i} = ${numero * i}`)
        i++
    }
}
 // hice las 2 opciones y las 2 funcionaron, solo se me complico mas el for
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  } 
  
tabla(8)