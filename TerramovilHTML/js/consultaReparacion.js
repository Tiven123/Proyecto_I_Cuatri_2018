$(document).ready(function () {
    $('#btn').click(function () {

        var reparaciones = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem("Reparaciones")) {
            var repaN = localStorage.getItem("Reparaciones");
            reparaciones = JSON.parse(repaN);
        }
        var datos = true;
        if (document.getElementById("txtBoleta").value == "") {
            datos = false;
        }

        if (datos) {
            var boleta = document.getElementById("txtBoleta").value;
            var encontrado = false;
            for (var i = 0; i < reparaciones.length; i++) {
                if (reparaciones[i][0] == boleta) {
                    document.getElementById("txtEstado").value = reparaciones[i][1];
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                alert("Boleta no existe");
            }
        } else {
            alert("Datos deben estar completos");
        }
    });
});
