let alumno = prompt("Ingrese su nombre");

let nota1 = prompt("Ingrese la primera nota");
let nota2 = prompt("Ingrese la segunda nota");
let nota3 = prompt("Ingrese la tercer nota");

function promedio () {
    promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    alert ("El promedio de notas es " + promedio);
}


promedio()