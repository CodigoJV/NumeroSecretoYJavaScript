/*
Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];

/*
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los 
siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/*
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/*
Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
*/

function elementosSeparadosLista() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
//elementosSeparadosLista();

/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/

console.log(lenguajesDeProgramacion);

/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion 
en orden inverso.
*/

console.log(lenguajesDeProgramacion.reverse(lenguajesDeProgramacion))
// o tambien segun la respuesta de la pagina:
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
//mostrarLenguagesReversoSeparadamente();

/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/

function mediaDeLista(){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma / numeros.length;
}

let numeros = [1, 2, 5, 4, 1, 7];

console.log(mediaDeLista(numeros));

/*
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/

function numeroMasGrandeYPequeño(lista) {
    let numeroGrande = lista[0];
    let numeroPequeño = lista[0];

    for (let i=1; i < lista.length; i++) {
        if (lista[i]>numeroGrande){
            numeroGrande=lista[i];
        }
        if (lista[i]<numeroPequeño){
            numeroPequeño=lista[i];
        }
    }

    console.log(lista);
    console.log(`Mayor: ${numeroGrande}`);
    console.log(`Menor: ${numeroPequeño}`);
}

let numeros2 = [1, 2, 5, 4, 1, 7]
numeroMasGrandeYPequeño(numeros2);
// o tambien a mi manera(mas corto): 
function numeroMasGrandeYPequeño2(lista){
    lista.sort();
    console.log(lista);
    console.log(`Mayor: ${lista[0]}`);
    console.log(`Menor: ${lista[lista.length-1]}`);
}

numeroMasGrandeYPequeño2(numeros2);

/*
Crea una función que retorne la suma de todos los elementos en una lista.
*/

function sumaDeLista(){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}

console.log(sumaDeLista(numeros2));

/*
Crea una función que reciba una lista como parámetro y retorne el índice de un elemento 
también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
*/

function retornarElementoIndice(lista, elemento){
    for (let i = 0; i < lista.length; i++ )
    if (lista[i] === elemento){
        return i;
    }
    return -1;
}

console.log(retornarElementoIndice(numeros2, 7))