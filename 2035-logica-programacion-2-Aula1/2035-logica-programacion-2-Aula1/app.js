let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    // El usuario acerta
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario === numeroSecreto)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto! En ${intentos} ${(intentos < 2) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', true);
    } else {
        // No acerto el usuario
        if (numeroDeUsuario > numeroMaximo){
            asignarTextoElemento('p', 'Error: Tienes que elegir un numero entre 1 y 10');
            intentos++;
            limpiarCaja();
        } else {
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es menor');
            }else{
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
       
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = ''; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //console.log(numeroGenerado)
    //console.log(listaNumerosSorteados)
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }  else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Numero secreto!');
    asignarTextoElemento('p', `Ingresa un numero entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

