$(document).ready(function () {
    $('#btn').click(function () {

        var cotizaciones = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem("Cotizaciones")) {
            var cotiN = localStorage.getItem("Cotizaciones");
            cotizaciones = JSON.parse(cotiN);
        }
        var datos = true;
        if (document.getElementById("txtNombre").value == "" ||
            document.getElementById("txtCelular").value == "" ||
            document.getElementById("txtCorreo").value == null ||
            document.getElementById("txtProducto").value == "") {
            datos = false;
        }

        if (datos) {
            /*Obtener datos del formulario*/
            var cotizacion = new Array(4);
            cotizacion[0] = document.getElementById("txtNombre").value;
            cotizacion[1] = document.getElementById("txtCelular").value;
            cotizacion[2] = document.getElementById("txtCorreo").value;
            cotizacion[3] = document.getElementById("txtProducto").value;


            /*Guardando los datos en el LocalStorage*/
            var cantidad = cotizaciones.push(cotizacion);
            localStorage.setItem("Cotizaciones", JSON.stringify(cotizaciones));


            /*Limpiando el formulario*/
            document.getElementById("txtNombre").value = "";
            document.getElementById("txtCelular").value = "";
            document.getElementById("txtCorreo").value = "";
            document.getElementById("txtProducto").value = "";

            alert("Cotizacion Registrada Exitosamente");
        } else {
            alert("Datos deben estar completos");
        }
    });
});
