$(document).ready(function () {
    $('#boton-login').click(function () {
        // se crea un arreglo principal
        var usuarios = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem('Usuarios')) {
            //verifica que tenga algo
            var usuariosN = localStorage.getItem('Usuarios');
            //lo convertimos a un arreglo
            usuarios = JSON.parse(usuariosN);
        }

        /*Obtener datos del formulario*/
        //obtenemos cada dato del formulario
        var usuario = document.getElementById("usuario").value;
        var contrasena = document.getElementById("contrasenna").value;

        //se crea una bandera de error
        var error = false;


        /*Verificar Usuario*/
        // se recorre el arreglo
        for (var i = 0; i < usuarios.length; i++) {
            //si el usuario y la contraseña corresponden a los del arreglo
            if ((usuarios[i][7] == usuario) && (usuarios[i][8]) == contrasena) {
                //mensaje de bienvenida
                alert("Bienvenido");
                //guardamos el nombre del usuario
                sessionStorage.setItem("Nombre", usuarios[i][0]);
                //guardamos el usuario
                sessionStorage.setItem("Usuario", usuarios[i][7]);
                //se crea variable con el tipo de usuario
                var tipo = usuarios[i][9];
                //activamos la bandera
                error = true;
                // salimos del recorrido
                break;
            }
        }
        //si la bandera no se activo
        if (!error) {
            //muesta un mensaje de errror
            alert("Verifique los datos");
        } else {
            if (tipo == "user") {
                //abre la ventana
                window.location = "info.html";
            } else {
                window.location = "admin_index.html";
            }
        }
    });
});
