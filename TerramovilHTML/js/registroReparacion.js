$(document).ready(function () {
    $('#btn').click(function () {

        var reparaciones = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem("Reparaciones")) {
            var repaN = localStorage.getItem("Reparaciones");
            reparaciones = JSON.parse(repaN);
        }
        var datos = true;
        if (document.getElementById("txtBoleta").value == "" || document.getElementById("txtEstado").value == "") {
            datos = false;
        }

        if (datos) {
            /*Obtener datos del formulario*/
            var reparacion = new Array(2);
            reparacion[0] = document.getElementById("txtBoleta").value;
            reparacion[1] = document.getElementById("txtEstado").value;

            var modificar = false;
            for (var i = 0; i < reparaciones.length; i++) {
                if (reparaciones[i][0] == reparacion[0]) {
                    reparaciones[i][1] = reparacion[1];
                    modificar = true;
                }
            }

            if (modificar) {
                localStorage.setItem("Reparaciones", JSON.stringify(reparaciones));
            } else {
                /*Guardando los datos en el LocalStorage*/
                var cantidad = reparaciones.push(reparacion);
                localStorage.setItem("Reparaciones", JSON.stringify(reparaciones));
            }

            /*Limpiando el formulario*/
            document.getElementById("txtBoleta").value = "";
            document.getElementById("txtEstado").value = "";

            alert("Reparacion Registrada Exitosamente");
        } else {
            alert("Datos deben estar completos");
        }
    });
});
