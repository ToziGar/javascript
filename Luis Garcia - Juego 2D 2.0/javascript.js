document.getElementById('cancion').play();

    function cambiarUsuario(){

    var mensaje;
    var nombre = prompt("Introduzca un nombre: ");

    if (nombre == null || nombre == "") {
          mensaje = "Has dejado el nombre vacío";
         } else {
         mensaje = "Tu nombre de usuario es: " + nombre;
         }
         document.getElementById("usuario").innerHTML = mensaje;

} 

function pausa(){
    var pausa = alert("Juego en pausa... acepte para continuar :D"); 
} 


    