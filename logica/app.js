//pedimos el numero al usuario y definimos el numero secreto - variables
let cantidadSecretos = parseInt(prompt('Eliga un numero maximo para adivinar:'))
let numeroSecreto = parseInt(Math.random()*cantidadSecretos)+1;
let numeroUsuario = 0;
let numeroIntentos = 1;
//let palabraVeces = 'intento';
let maximosIntentos = parseInt(prompt('Eliga un numero maximo de intentos:'));

//vemos el numero secreto en la consola
console.log(numeroSecreto);

//creamos un loop 
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${cantidadSecretos} por favor:`));

    // mostramos en la consola el numero de la variable del usuario
    console.log('valor del usuario: ' + numeroUsuario);
    console.log(numeroSecreto == numeroUsuario);

    // iniciamos el juego dando una condicion para saber si acerto o no
    if (numeroUsuario == numeroSecreto) {
        //acertamos
        // las comillas se reemplazan con ` otras comillas que permiten mas
        // variables
        alert(`Acertaste, el numero es: ${numeroUsuario}. Te tomo ${numeroIntentos} ${numeroIntentos == 1 ? 'intento' : 'intentos'}.`);
    } else {
        // no se cumplio la condicion
        // alert('Lo siento no acertaste el numero');
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //Incrementamos al contador cuando no acierta
        numeroIntentos++;
        //palabraVeces = "intentos";
        if (numeroIntentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}