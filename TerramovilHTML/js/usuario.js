$(document).ready(function () {
    $('#boton-usuario').click(function () {

        // se crea un arreglo principal
        var usuarios = new Array();

        /*Obtener los datos en el LocalStorage*/
        //verifica que tenga algo
        if (localStorage.getItem('Usuarios')) {
            //obtiene los datos guardados
            var usuariosN = localStorage.getItem('Usuarios');
            //lo convertimos a un arreglo
            usuarios = JSON.parse(usuariosN);
        }

        /*Obtener datos del formulario*/
        // crea una arreglo con los datos del formulario
        var usuario = new Array(10);
        //obtenemos cada dato del formulario
        usuario[0] = document.getElementById("txtNombre").value;
        usuario[1] = document.getElementById("txtApellidos").value;
        usuario[2] = document.getElementById("txtCedula").value;
        usuario[3] = document.getElementById("txtTelefono").value;
        usuario[4] = document.getElementById("txtCelular").value;
        usuario[5] = document.getElementById("txtDireccion").value;
        usuario[6] = document.getElementById("txtCorreo").value;
        usuario[7] = document.getElementById("txtUsuario").value;
        usuario[8] = document.getElementById("txtContrasenna").value;
        usuario[9] = "user";

        /* se verifica que no hay campos vacios*/
        //se crea una bandera de error
        var error = false;
        // se recorre el arreglo
        for (var i = 0; i < usuario.length; i++) {
            //si algun campo esta vacio o nulo
            if (usuario[i] == "" || usuario[i] == null) {
                //se activa la bandera
                error = true;
                // se muestra un mensaje de error
                alert("Todos los campos son requeridos");
                break;
            }
        }
        /*Guardando los datos en el LocalStorage*/
        // si la bandera de error esta desactivada
        if (!error) {
            // se crea una variable con la cantidad de campos en el arreglo principal
            // ademas se agrega los datos obtenidos (se crea una matriz)
            var cantidadUsuarios = usuarios.push(usuario);
            // se guarda los datos 
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
            // se muestra un mesaje de exito
            alert("Usuario Registrado Exitosamente");

            /*Limpiando el formulario*/
            //se borran todos los datos del fomulario
            document.getElementById("txtNombre").value = "";
            document.getElementById("txtApellidos").value = "";
            document.getElementById("txtCedula").value = "";
            document.getElementById("txtTelefono").value = "";
            document.getElementById("txtCelular").value = "";
            document.getElementById("txtDireccion").value = "";
            document.getElementById("txtCorreo").value = "";
            document.getElementById("txtUsuario").value = "";
            document.getElementById("txtContrasenna").value = "";
        } else {
            alert("Verifique los datos");
        }
    });
});
$(document).ready(function () {
    $('#boton-borrar').click(function () {
        localStorage.clear();
        alert("Se borra base de datos exitosamente");
    });
});
