$(document).ready(function () {
    $('#btn').click(function () {
        // se crea un arreglo principal
        var contactos = new Array();

        /*Obtener los datos en el LocalStorage*/
        //verifica que tenga algo
        if (localStorage.getItem("Contactos")) {
            //obtiene los datos guardados
            var contacN = localStorage.getItem("Contactos");
            //lo convertimos a un arreglo
            contactos = JSON.parse(contacN);

            for (var i = 0; i < contactos.length; i++) {
                var fila = "<tr><td>" + contactos[i][0] + "</td><td>" + contactos[i][1] + "</td><td>" + contactos[i][2] + "</td></tr>";

                var filas = document.createElement("TR");
                filas.innerHTML = fila;
                document.getElementById("lista").appendChild(filas);
            }
        }

    });
});
