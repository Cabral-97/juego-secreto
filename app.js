/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //Esto es para verificar en la consola del navegador

    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario == numeroSecreto);*/
    
    //console.log(numeroSecreto);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `acertastes en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        }else{
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarcaja();
        
    }

    return;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';  
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     //Si el numero generado esta en la incluido en la lista.


    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya sortemoas todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
   
    /*if (listaNumeroSorteados.includes(numeroGenerado)){

    }*/
    else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}



function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    // Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'trut');
    
}

condicionesIniciales();