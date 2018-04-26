$(document).ready(function () {
    $('#btn').click(function () {
        // se crea un arreglo principal
        var cotizaciones = new Array();

        /*Obtener los datos en el LocalStorage*/
        //verifica que tenga algo
        if (localStorage.getItem("Cotizaciones")) {
            //obtiene los datos guardados
            var cotiN = localStorage.getItem("Cotizaciones");
            //lo convertimos a un arreglo
            cotizaciones = JSON.parse(cotiN);

            for (var i = 0; i < cotizaciones.length; i++) {
                var fila = "<tr><td>" + cotizaciones[i][0] + "</td><td>" + cotizaciones[i][1] + "</td><td>" + cotizaciones[i][2] + "</td><td>" + cotizaciones[i][3] + "</td></tr>";

                var filas = document.createElement("TR");
                filas.innerHTML = fila;
                document.getElementById("lista").appendChild(filas);
            }
        }

    });
});
