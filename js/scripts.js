//Declaración de variables y objetos
const width = 800;
const heigth = 500;

let target = {
    x: parseInt(Math.random() * (width - 1) +1),
    y: parseInt(Math.random() * (heigth - 1) +1),
}

let mapa = document.getElementById("mapa");
let contador = 0;

//Declaración de funciones
 let busquedaTesoro = (e) => {
    contador++;

    let distancia = () => {
        let diffX = target.x - e.offsetX;
        let diffY = target.y - e.offsetY;
        return Math.sqrt((diffX*diffX) + (diffY*diffY));
    }

    let mensajeUsuario = () => {
        if(distancia() < 30) {
            alert("¡Felicidades!, has encontrado el tesoro del pirata Barba Negra en " + contador + " clicks");
            window.location.reload(true);
        } else if(distancia() >= 30 && distancia() < 60) {
            alert("Estas que ardes");
        } else if(distancia() >= 60 && distancia() < 100) {
            alert("Muy caliente");
        } else if(distancia() >= 100 && distancia() < 150) {
            alert("caliente");
        } else if(distancia() >= 150 && distancia() < 300) {
            alert("frío")
        } else if(distancia() >= 300 && distancia() < 500) {
            alert("Muy frío");
        } else {
            alert("Estas Congelado")
        }
    }
    
    return mensajeUsuario();
    
}

//Asignación de Eventos
mapa.addEventListener("click", busquedaTesoro)