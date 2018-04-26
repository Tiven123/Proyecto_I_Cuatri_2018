$(document).ready(function () {
    $('#btn-cargar').click(function () {
        // se crea un arreglo principal
        var pedidos = new Array();

        /*Obtener los datos en el LocalStorage*/
        //verifica que tenga algo
        if (localStorage.getItem('Pedidos')) {
            //obtiene los datos guardados
            var pedidosN = localStorage.getItem('Pedidos');
            //lo convertimos a un arreglo
            pedidos = JSON.parse(pedidosN);

            for (var i = 0; i < pedidos.length; i++) {
                var fila = "<tr><td>" + pedidos[i][0] + "</td><td>" + pedidos[i][1] + "</td><td>" + pedidos[i][2] + "</td><td>" + pedidos[i][3] + "</td><td>" + pedidos[i][4] + "</td><td>" + pedidos[i][5] + "</td><td>" + pedidos[i][6] + "</td></tr>";

                var filas = document.createElement("TR");
                filas.innerHTML = fila;
                document.getElementById("listaPedidos").appendChild(filas);
            }
        }

    });
});
