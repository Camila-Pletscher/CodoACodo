const btnSaludo = document.getElementById('btnSaludo');
btnSaludo.addEventListener('click', generarSaludo);

const inpNombre = document.getElementById ('inpNombre');

const saludo = document.getElementById ('saludo');

function generarSaludo() {
    saludo.innerText = `Hola `+ inpNombre.value;
}