$(document).ready(function () {
    $('#boton-usuario').click(function () {

        // se crea un arreglo principal
        var usuario = new Array();



        /*Obtener datos del formulario*/
        //obtenemos cada dato del formulario
        usuario.name = document.getElementById("txtNombre").value;
        usuario.rol = "user";
        usuario.email = document.getElementById("txtCorreo").value;
        usuario.password = document.getElementById("txtContrasenna").value;

        /* se verifica que no hay campos vacios*/
        //se crea una bandera de error
        var error = false;
        // se recorre el arreglo

        //si algun campo esta vacio o nulo
        if (usuario.name == "" || usuario.name == null || usuario.name.length == 0 || /^\s+$/.test(usuario.name)) {
            //se activa la bandera
            error = true;
            alert("Favor indique el Nombre");
        }
        else if (usuario.email == "" || usuario.email == null || usuario.email.length == 0) {
            //se activa la bandera
            error = true;
            alert("Favor indique el Correo");
        }
        else if (!(/\S+@\S+\.\S+/.test(usuario.email))) {
            //se activa la bandera
            error = true;
            alert("Favor indique un Correo Valido");
        }
        else if (usuario.rol == "" || usuario.rol == null || usuario.name.rol == 0 || /^\s+$/.test(usuario.rol)) {
            //se activa la bandera
            error = true;
            alert("Favor indique el Rol");
        }
        else if (usuario.password == "" || usuario.password == null || usuario.password.length == 0) {
            //se activa la bandera
            error = true;
            alert("Favor indique el Nombre");
        }

        /*Guardando los datos en el API*/
        // si la bandera de error esta desactivada
        if (!error) {
            //var User = JSON.stringify(usuario);

            //var http = new XMLHttpRequest();
            // var url = "http://localhost:3000/users";
            //http.open("POST", url, true);

            $.ajax({
                type: "POST",
                url: "http://localhost:3000/users",
                data: JSON.stringify(usuario),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (data) {
                    var value = data.d;
                    if (value.UserID != 0) {
                        alert.html('success');
                    }
                },
                error: function (e) {
                }
            });

            //Send the proper header information along with the request
            //http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            //http.onreadystatechange = function () {//Call a function when the state changes.
            //    if (http.readyState == 4 && http.status == 200) {
            //        alert(http.responseText);
            //    }
            //}
            //http.send(User);

            alert("Usuario Registrado Exitosamente");

            /*Limpiando el formulario*/
            //se borran todos los datos del fomulario
            document.getElementById("txtNombre").value = "";
            document.getElementById("txtCorreo").value = "";
            document.getElementById("txtContrasenna").value = "";
        }
    });
});
$(document).ready(function () {
    $('#boton-borrarr').click(function () {
        localStorage.clear();
        alert("Se borra base de datos exitosamente");
    });
});
$(document).ready(function () {
    $('#boton-Cargar').click(function () {
        const content = document.getElementById('list');
        const getConnection = () => {
            const URL = "http://localhost:3000/users";
            fetch(URL)
                .then(response => response.json())
                .then(response =>
                for (response i = 0; i < response.length; i++){
                var obj = arr[i];
                for (var key in obj) {
                    var attrName = key;
                    var attrValue = obj[key];
                }
            }
        }));

        }
const listar = element => {
    var fila = '<tr><td> ' + element.name + '</td><td>' + element.rol + '</td><td>' + element.email +
        '</td><td>' + element.password + '</td></tr>';
    $('#tablita tr:last').after(fila);
};

getConnection();
    });
});