



//Redirecciona hacia el juego
function redireccionar() {

  let numCajas= document.getElementById("numCajas").value;
  //Validamos que el usuario no ingrese al juego sin antes haber ingresado el número permitido de cajas.
  if(numCajas<=0 || numCajas>15){
    window.alert("¡El número de cajas es incorrecto! Revisa las instrucciones.");
    return 0;
  }else{
    localStorage.setItem("numCajas",numCajas);
    let url="templates/inicio_juego.html";
    window.location.href = url;
  }


}