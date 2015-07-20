function jugar(casilla) {
    var turno = document.getElementById('jugador');
    var turno = turno.textContent;
    var tablero = document.getElementById('tablero');
    var tablero = tablero.getElementsByClassName('casilla');
    
    if (turno == '1') {
        tablero[casilla].textContent = 'X';
        document.getElementById('jugador').textContent = '2';
    }
    else {
        tablero[casilla].textContent = 'O';
        document.getElementById('jugador').textContent = '1';
    }
    verificar();
}

function verificar(){
    var info = new Array();
    var ganador = '';
    var cambio = 0; 
    
    for (var i = 0; i < 9; i++)
    {
        info[i] = document.getElementById('tablero').getElementsByClassName('casilla')[i].textContent;
        if(info[i] == '')
            info[i] = i;
    }      
    
    for (var i = 0; i < 9; i+=3) {
        if (info[i] == info[i + 1] && info[i] == info[i + 2]){
            ganador = info[i];
            break;
        }
    }
    
    for (var i = 0; i < 3; i++) {
         if (info[i] == info[i + 3] && info[i] == info[i + 6]) {
            ganador = info[i];
            break;
        }    
    }
    
    if (info[0] == info[4] && info[0] == info[8]) {
        ganador = info[0];        
    }
    
    if (info[2] == info[4] && info[2] == info[6]) {
        ganador = info[2];        
    }
    
    for(var i = 0; i < 9; i++) {
        if (info[i] == i) {
            cambio = 1;
            break;
        }
    }
    
    if (cambio == 0 && ganador == '') {
        ganador = 'empate';
        alert("Empate");
    }
    
    if(ganador != '' && ganador != 'empate')
    {
        alert("El ganador es el Jugador: " + ganador);
    }
}

function reset() {
    for (var i = 0; i < 9; i++)
        document.getElementById('tablero').getElementsByClassName('casilla')[i].textContent = '';
}