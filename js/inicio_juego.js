 
 
 //Objeto que almacena el id y el estado de una caja.
 class Caja {
    destruida=false;
     constructor(id) {
       this.id = id;
     }
 } 
 
 //Arreglo que contendrá las cajas y su estado.
 arrayCajas =[];
 fraseChuckNorris="";



  //Función que trae una frase random de CHUCK NORRIS desde la API.
 async function llamarChuckNorris() {
  try {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const jsonResponse = await response.json();

  return jsonResponse;
  } catch (error){
    window.alert("¡Algo salió mal con el endpoint de Chuck Norris! Vuelva a recargar");
  }
}

 

  //Inicio del juego como tal
 this.llamarChuckNorris().then((data) => {
  //Tomamos el json de respuesta de la API.
  this.fraseChuckNorris= data;

/*   Accediendo a un archivo JSON en local. Esto es solo para cumplir con los puntos de la rúbrica, 
  ya que el json que uso es de la API de Chuck Norris Online. */
fetch('../src/jsons/cajas.json')
  .then(response => response.json())
  .then(datos => {
  })
 
  //Función que inicia las cajas
  this.generarCajas(localStorage.getItem("numCajas"));
  //Generamos el elemento en HTML que mostrará la frase del gran CHUCK NORRIS.
  let fraseChuckNorrisTemplate = document.createElement("div");
  fraseChuckNorrisTemplate.id="fraseChuckNorrisTemplate";
  fraseChuckNorrisTemplate.className="chuckNorris";
  fraseChuckNorrisTemplate.innerHTML +=` <br></br>
  <br></br>
  <div class="card " style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item ">Frase Random de Chuck Norris: <b> ${this.fraseChuckNorris.value}</b></li>
  </ul>
  </div>
  
 `;
 

 //Utilización de librería Externa JS como indica la rúbrica. Usaremos moment.js para mostrar la fecha y la hora actual.
  document.body.appendChild(fraseChuckNorrisTemplate);  

  let fecha = document.createElement("div");
  fecha.id="fecha";
  fecha.className="chuckNfechaorris";
  fecha.innerHTML += ` <br></br>
  <div class="card " style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item ">Fecha del Día: <b> ${moment().format('MMMM Do YYYY, h:mm:ss a')}</b></li>
  </ul>
  </div>
  
 `;
 document.body.appendChild(fecha); 

  });

 

 
  //Generación de las cajas en base al número de cajas seleccionado
  function generarCajas(numCajas){

    let cajaJson={"cajas":[]};
     let contenedor = document.createElement("div");
     for(let i=0; i<numCajas;i++){
       let caja= new Caja(i);
        arrayCajas.push(caja);
        contenedor.innerHTML +=`<img class="caja" id="caja${i}" width="150px" height="150px" src="../src/images/caja.jpg">`;
     }

/*      Convertimos el Array en JSON para cumplir con la rúbrica, pero no es necesario para 
     el funcionamiento con localStorage ya implementado. */ 
     cajaJson.cajas=arrayCajas;

     //Guardamos el array en local Storage.
     localStorage.setItem("arrayCajas",JSON.stringify(arrayCajas));
     document.body.appendChild(contenedor);  
     this.agregaFuncionesCajas();
     actualizarMarcador(numCajas)


     
  }
  
  //Agrega las funciones de click a las cajas
  function agregaFuncionesCajas(){
   for(let i=0; i<localStorage.getItem("numCajas");i++){
     var caja = document.getElementById(`caja`+i);
     caja.addEventListener('click', eliminarCaja);
    }
  }
 
  //Elimina las cajas tras el disparo.
  function eliminarCaja(event){
   var elementoClic = event.target;
   var elementoId = elementoClic.id;
   let caja = document.getElementById(elementoId);
 
   //Sobreescribimos los datos de las cajas en localStorage.
   arrayCajas[elementoId.replace("caja","")].destruida=true;
   localStorage.setItem("arrayCajas",JSON.stringify(arrayCajas));
 
   reproducirDisparo();
   caja.remove(); 
   actualizarMarcador(localStorage.getItem("numCajas"));
  }
 
  //Reproduce el sonido de disparo al darle a una caja.
  function reproducirDisparo() {
   var audio = document.getElementById('disparo');
   audio.currentTime = 0;
   audio.play();
 }


 //Función que da la victoria y muestra el nuevo botón para volver al inicio
 function victoria() {
  let victoria = document.createElement("div");
  victoria.id="fraseChuckNorrisTemplate";
  victoria.className="victoria";
  victoria.innerHTML +=` <br></br>
  <br></br>
  <div class="card " style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item victoria"> <b>¡Victoria! Has derribado las ${localStorage.getItem("numCajas")} cajas.</b> </b></li>
    <a onclick="reproducirVictoria()" class="btn btn-primary botonInicio">Volver al Inicio</a>
  </ul>
  </div>`;
 
  document.body.appendChild(victoria);  
}


  //Reproduce el sonido de victoria tras destruir todas las cajas
  function reproducirVictoria() {
   var audio = document.getElementById('victoria');
   audio.currentTime = 0;
   audio.play();

   let url="../index.html";
   window.location.href = url;
 }
 
 
 //Se encarga de mostrar el marcador
 function actualizarMarcador(numCajas){
 
   let marcadorTemporal = document.getElementById('marcador');
 
 
   if(marcadorTemporal){
    let cajasDestruidas=obtenerCajasDestruidas()
     marcadorTemporal.remove(); 
     let marcador = document.createElement("div");
     marcador.id="marcador";
     marcador.className="contadores";
     marcador.innerHTML +=` <br></br>
     <div class="card" style="width: 18rem;">
     <ul class="list-group list-group-flush">
       <li class="list-group-item">TOTAL CAJAS: ${numCajas}</li>
       <li class="list-group-item">CAJAS DESTRUIDAS: ${cajasDestruidas}</li>
       <li class="list-group-item">CAJAS RESTANTES: ${numCajas-cajasDestruidas}</li>
     </ul>
     </div>`;
    
     document.body.appendChild(marcador);  
   }else{
    let cajasDestruidas=obtenerCajasDestruidas()
     let marcador = document.createElement("div");
     marcador.id="marcador";
     marcador.className="contadores";
     marcador.innerHTML +=`<br></br>
     <div class="card" style="width: 18rem;">
     <ul class="list-group list-group-flush">
       <li class="list-group-item">TOTAL CAJAS: ${numCajas}</li>
       <li class="list-group-item">CAJAS DESTRUIDAS: ${cajasDestruidas}</li>
       <li class="list-group-item">CAJAS RESTANTES: ${numCajas-cajasDestruidas}</li>
     </ul>
     </div>`;
   
     document.body.appendChild(marcador);  
   
   }
 
 }
 
 
 //Devuelve el número de cajas destruidas
 function obtenerCajasDestruidas(){
   let arrayCajasAContar = JSON.parse(localStorage.getItem("arrayCajas"));
   let contadorDestruidas=0;
   for(element of arrayCajasAContar){
     element.destruida==true?contadorDestruidas++:"";
   }
 
   contadorDestruidas==localStorage.getItem("numCajas")?victoria():"";
 
   return contadorDestruidas;
 }
 
 