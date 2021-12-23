let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes pasar gratis");
            free = true;
        } else {
            alert("Podes pasar, pero tenes que pagar la entrada");
        }
    } else {
        alert ("No podes pasar porque sos menor de edad");
    }
}

validarCliente(1.2)
validarCliente(1.5)
validarCliente(2.1)
validarCliente(3)