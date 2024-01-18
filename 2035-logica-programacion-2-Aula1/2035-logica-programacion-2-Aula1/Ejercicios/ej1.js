/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/

function saludo(){
    console.log('Hola mundo!');
}

saludo();

/*
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/

function saludoNombre(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludoNombre('Juan');

/*
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/

function dobles(valor) {
    return valor * 2;    
}

console.log(dobles(10));

/*
Crear una función que recibe tres números como parámetros y devuelve su promedio.
*/

function promedio(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3; 
}

console.log(promedio(5, 6, 7))

/*
Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
*/

function numMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

console.log(numMayor(6, 8))

/*
Crear una función que recibe un número como parámetro y devuelve el resultado de 
multiplicar ese número por sí mismo.
*/

function cuadrado(numero){
    return numero * numero;
}

console.log(cuadrado(9))