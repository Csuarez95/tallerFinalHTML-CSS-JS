function imprimir(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    //Validación de la estructura del correo electrónico
    var validarCorreo = /\w+@\w+\.+[a-z]/;

    if (nombre == "" || correo == "" || asunto == "" || mensaje == ""){
        if (nombre == ""){
            alert("Falta ingresar nombre");
        } 
        if (correo == "" ){
            alert("Falta ingresar correo");
        } 
        if (asunto == ""){
            alert("Falta ingresar asunto");
        } 
        if (mensaje == ""){
            alert("Falta ingresar mensaje");
        }
    } else if (!validarCorreo.test(correo)){
        alert("El correo ingresado no es válido");
    } else {
        console.log(nombre + "\n" + correo + "\n" + asunto + "\n" + mensaje);
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";
        alert("Envío de correo exitoso");
    }

}
