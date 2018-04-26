$(document).ready(function () {
    $('#btnCargador').click(function () {
        if (document.getElementById("cantidadCargador").value == "") {
            document.getElementById("cantidadCargador").value = 1;
        } else {
            var cantida = parseInt(document.getElementById("cantidadCargador").value);
            cantida = cantida + 1;
            document.getElementById("cantidadCargador").value = cantida;
        }

    });
    $('#btnCargadorGenerico').click(function () {
        if (document.getElementById("cantidadCargadorGenerico").value == "") {
            document.getElementById("cantidadCargadorGenerico").value = 1;
        } else {
            var cantida = parseInt(document.getElementById("cantidadCargadorGenerico").value);
            cantida = cantida + 1;
            document.getElementById("cantidadCargadorGenerico").value = cantida;
        }

    });
    $('#btnCargadorUniversal').click(function () {
        if (document.getElementById("cantidadCargadorUniversal").value == "") {
            document.getElementById("cantidadCargadorUniversal").value = 1;
        } else {
            var cantida = parseInt(document.getElementById("cantidadCargadorUniversal").value);
            cantida = cantida + 1;
            document.getElementById("cantidadCargadorUniversal").value = cantida;
        }

    });
    $('#btnDiadema').click(function () {
        if (document.getElementById("cantidadDiadema").value == "") {
            document.getElementById("cantidadDiadema").value = 1;
        } else {
            var cantida = parseInt(document.getElementById("cantidadDiadema").value);
            cantida = cantida + 1;
            document.getElementById("cantidadDiadema").value = cantida;
        }

    });
    $('#btnPower').click(function () {
        if (document.getElementById("cantidadPower").value == "") {
            document.getElementById("cantidadPower").value = 1;
        } else {
            var cantida = parseInt(document.getElementById("cantidadPower").value);
            cantida = cantida + 1;
            document.getElementById("cantidadPower").value = cantida;
        }

    });
    $('#btnEstuche').click(function () {
        if (document.getElementById("cantidadEstuche").value == "") {
            document.getElementById("cantidadEstuche").value = 1;
        } else {
            var cantida = parseInt(document.getElementById("cantidadEstuche").value);
            cantida = cantida + 1;
            document.getElementById("cantidadEstuche").value = cantida;
        }

    });

    $('#btn-pedido').click(function () {
        // se crea un arreglo principal
        var pedidos = new Array();

        /*Obtener los datos en el LocalStorage*/
        //verifica que tenga algo
        if (localStorage.getItem('Pedidos')) {
            //obtiene los datos guardados
            var pedidosN = localStorage.getItem('Pedidos');
            //lo convertimos a un arreglo
            pedidos = JSON.parse(pedidosN);
        }

        /*Obtener datos del formulario*/
        // crea una arreglo con los datos del formulario
        var pedido = new Array(7);
        //obtenemos cada dato del formulario
        pedido[0] = sessionStorage.getItem("Usuario");
        pedido[1] = document.getElementById("cantidadCargador").value;
        pedido[2] = document.getElementById("cantidadCargadorGenerico").value;
        pedido[3] = document.getElementById("cantidadCargadorUniversal").value;
        pedido[4] = document.getElementById("cantidadDiadema").value;
        pedido[5] = document.getElementById("cantidadPower").value;
        pedido[6] = document.getElementById("cantidadEstuche").value;

        /* se verifica que no hay campos vacios*/
        //se crea una bandera de error
        var error = 0;
        // se recorre el arreglo
        for (var i = 1; i < pedido.length; i++) {

            //si algun campo esta vacio o nulo
            if (pedido[i] == "") {
                //se activa la bandera
                error += 1;
                // se muestra un mensaje de error
            }
        }
        /*Guardando los datos en el LocalStorage*/
        // si la bandera de error esta desactivada
        if (error < 6) {
            // se crea una variable con la cantidad de campos en el arreglo principal
            // ademas se agrega los datos obtenidos (se crea una matriz)
            var cantidad = pedidos.push(pedido);
            // se guarda los datos 
            localStorage.setItem("Pedidos", JSON.stringify(pedidos));
            // se muestra un mesaje de exito
            alert("Pedido Realizado Exitosamente");

            /*Limpiando el formulario*/
            //se borran todos los datos del fomulario

            document.getElementById("cantidadCargador").value = "";
            document.getElementById("cantidadCargadorGenerico").value = "";
            document.getElementById("cantidadCargadorUniversal").value = "";
            document.getElementById("cantidadDiadema").value = "";
            document.getElementById("cantidadPower").value = "";
            document.getElementById("cantidadEstuche").value = "";
        } else {
            alert("Debe elegir al menos un producto");
        }
    });

});
