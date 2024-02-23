



//Redirecciona hacia el juego
function redireccionar() {

  let numCajas= document.getElementById("numCajas").value;
  //Validamos que el usuario no ingrese al juego sin antes haber ingresado el número permitido de cajas.
  if(numCajas<=0 || numCajas>15){

    let numeroIncorrecto = document.createElement("div");
    numeroIncorrecto.id="fraseChuckNorrisTemplate";
    numeroIncorrecto.className="incorrecto";
    numeroIncorrecto.innerHTML +=` <br></br>
    <br></br>
    <div class="card " style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item incorrecto">El número de cajas ingresado (${numCajas}) es INCORRECTO. Vuelve a ingresarlos</b></li>
    </ul>
    </div>`;
   
    document.body.appendChild(numeroIncorrecto);  

    return 0;
  }else{
    localStorage.setItem("numCajas",numCajas);
    let url="templates/inicio_juego.html";
    window.location.href = url;
  }


}