$(document).ready(function () {
    $('#btn').click(function () {

        var contactos = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem("Contactos")) {
            var contacN = localStorage.getItem("Contactos");
            contactos = JSON.parse(contacN);
        }
        var datos = true;
        if (document.getElementById("txtNombre").value == "" ||
            document.getElementById("txtCorreo").value == null ||
            document.getElementById("txtMensaje").value == "") {
            datos = false;
        }

        if (datos) {
            /*Obtener datos del formulario*/
            var contacto = new Array(3);
            contacto[0] = document.getElementById("txtNombre").value;
            contacto[1] = document.getElementById("txtCorreo").value;
            contacto[2] = document.getElementById("txtMensaje").value;


            /*Guardando los datos en el LocalStorage*/
            var cantidad = contactos.push(contacto);
            localStorage.setItem("Contactos", JSON.stringify(contactos));


            /*Limpiando el formulario*/
            document.getElementById("txtNombre").value = "";
            document.getElementById("txtCorreo").value = "";
            document.getElementById("txtMensaje").value = "";

            alert("Contacto Registrado Exitosamente");
        } else {
            alert("Datos deben estar completos");
        }
    });
});
