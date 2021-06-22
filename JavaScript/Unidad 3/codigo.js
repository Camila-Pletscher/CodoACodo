edades()

function esMayor (edad) {
if (edad >= 18) {
    alert("Sos mayor de edad");
} else {
    alert("Sos menor de edad");
}
}


function edades () {
    let edad1 = prompt("Ingresar edad1");
    esMayor(edad1);
    let edad2 = prompt("Ingresar edad2");
    esMayor(edad2);
    let edad3 = prompt("Ingresar edad3");
    esMayor(edad3);
    
    compararEdades(edad1,edad2,edad3)
}

function compararEdades (edad1,edad2,edad3) {
    if (edad1 > edad2) {
        if (edad1 > edad3) {
            alert (edad1 + " es mayor");
        } else {
            alert (edad3 + " es mayor");
        }
    } else if (edad2 > edad3) {
        alert (edad2 + " es mayor");
    } else {
        alert (edad3 + " es mayor");
    }
}


