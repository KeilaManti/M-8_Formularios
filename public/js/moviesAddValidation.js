/* las clases is-invalid e is-valid no existian en la hoja de estilos.
Asi que las cree pero solo puse un borde */

function qs(element) {
    return document.querySelector(element)
}
window.addEventListener('load', function () {
	let tit = document.querySelector("#title");
	tit.onfocus = tit.classList.add("foco");

    let $titulo = qs("#title"),
    $tituloErrors = qs("#tituloErrors"),
    $calificacion = qs("#rating"),
    $calificacionErrors = qs("#calificacionErrors"),
    $premios = qs("#awards"),
    $premiosErrors = qs("#premiosErrors"),
    $fecha = qs("#release_date"),
    $fechaErrors = qs("#fechaErrors"),
    $duracion = qs("#length"),
    $duracionErrors = qs("#duracionErrors"),
    $genero = qs("#genre_id"),
    $generoErrors = qs("#generoErrors"),
    $formulario = qs("#form"),
    $enviarErrors = qs("#enviarErrors")

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExCalyPre = /^[0-10]$/
    

    $titulo.addEventListener("blur", function(){
        console.log($titulo.value.trim())
        switch (true) {
            case !$titulo.value.trim():
                $tituloErrors.innerHTML = "Ingrese un título"
                $titulo.classList.remove("foco");
                $titulo.classList.add("is-invalid")
                break;  
            default:
                $titulo.classList.remove("foco");
                $titulo.classList.remove("is-invalid");
                $titulo.classList.add("is-valid")
                $tituloErrors.innerHTML = ""
                break;
        }
    });

    $calificacion.addEventListener("blur", function(){
        switch (true) {
            case !$calificacion.value.trim():
                $calificacionErrors.innerHTML = "Ingrese una calificación"
                $calificacion.classList.add("is-invalid")
                break;
            case $calificacion.value > 10:
                $calificacionErrors.innerHTML = "La calificación debe ser menor a 10"
                $calificacion.classList.add("is-invalid")
                break;
            default:
                $calificacion.classList.remove("is-invalid");
                $calificacion.classList.add("is-valid")
                $calificacionErrors.innerHTML = ""
                break;
        }
    });

    $premios.addEventListener("blur", function(){
        switch (true) {
            case !$premios.value.trim():
                $premiosErrors.innerHTML = "Ingrese la cantidad de premios, de no tener ingrese 0"
                $premios.classList.add("is-invalid")
                break;
            case $premios.value > 10:
                $premiosErrors.innerHTML = "Los premios deben ser menor a 10"
                $premios.classList.add("is-invalid")
                break;
            default:
                $premios.classList.remove("is-invalid");
                $premios.classList.add("is-valid")
                $premiosErrors.innerHTML = ""
                break;
        }
    });

    $fecha.addEventListener("blur", function(){
        switch (true) {
            case !$fecha.value.trim():
                $fechaErrors.innerHTML = "Ingrese una fecha"
                $fecha.classList.add("is-invalid")
                break;   
            default:
                $fecha.classList.remove("is-invalid");
                $fecha.classList.add("is-valid")
                $fechaErrors.innerHTML = ""
                break;
        }
    });

    $duracion.addEventListener("blur", function(){
        switch (true) {
            case !$duracion.value.trim():
                $duracionErrors.innerHTML = "Ingrese duración"
                $duracion.classList.add("is-invalid")
                break;
            case $duracion.value < 60 || $duracion.value > 360:
                $duracionErrors.innerHTML = "La calificación debe ser mayor a 60 y menor a 360"
                $duracion.classList.add("is-invalid")
                break;
            default:
                $duracion.classList.remove("is-invalid");
                $duracion.classList.add("is-valid")
                $duracionErrors.innerHTML = ""
                break;
        }
    });

    $genero.addEventListener("blur", function(){
        switch (true) {
            case !$genero.value.trim():
                $generoErrors.innerHTML = "Ingrese un genero"
                $genero.classList.add("is-invalid")
                break;   
            default:
                $genero.classList.remove("is-invalid");
                $genero.classList.add("is-valid")
                $generoErrors.innerHTML = ""
                break;
        }
    });

    $formulario.addEventListener('submit',function(event){
        event.preventDefault()
        let elementos = this.elements
        let errores = 0;
        
        for (let i = 0; i < elementos.length-1; i++) {
            if(elementos[i].value == ""){
                elementos[i].classList.add('is-invalid');
            } else {
                errores = errores + 1;
            }
        }
        console.log(errores)
        if(errores == elementos.length-1){
            console.log("Se puede enviar");
            event.preventDefault()
        } else {
            console.log("No se puede enviar")
            event.preventDefault()
        }

    })
})