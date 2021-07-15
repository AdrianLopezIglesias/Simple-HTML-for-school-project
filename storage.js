function iniciar() {
    var boton = document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem() {

    var id = document.getElementById('id').value;
    var descripcion = document.getElementById('descripcion').value;
    var urgencia = document.getElementById('urgencia').value;
    var fecha = document.getElementById('fecha').value;

    var tarea = [id, descripcion, urgencia, fecha];

    window.sessionStorage.setItem(id, tarea);



    mostrar();

    document.getElementById('id').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('urgencia').value = '';
    document.getElementById('fecha').value = '';
}

function mostrar() {
    var datos = document.getElementById('mytable');
    document.getElementById('mytable').innerHTML = "";

    for (var f = 0; f < sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);

        var storedArray = sessionStorage.getItem(clave);

        var ar = storedArray.split(','); // split string on comma space


        datos.innerHTML += '<tr><td>' + clave + '</td><td>' + ar[1] + '</td><td>' + ar[2] + '</td><td>' + ar[3] + '<td><button class="button" onclick="eliminar(\'' + clave + '\')">Eliminar</button></td></tr>';


    }
}









function eliminar(id) {
    if (confirm('Está Seguro?')) {
        sessionStorage.removeItem(id);
        mostrar();
    }
}


window.addEventListener('load', iniciar, false);