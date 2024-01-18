let titulo = document.querySelector('h1');
titulo.innerHTML='Hora del Desafío';

function consolaclick(){
    console.log('El boton fue clicado');
}

function alertaclick(){
    alert('Yo amo JS');
}

function ciudadclick(){
    let ciudad = prompt("Nombre una ciudad:");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function suma(){
    let valor1 = parseInt(prompt('Ingrese un numero'));
    let valor2 = parseInt(prompt('Ingrese otro numero'));
    alert(`La suma de ambos numeros es de ${valor1+valor2}`)

}