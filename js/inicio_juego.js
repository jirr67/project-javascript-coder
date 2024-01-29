 
 
 //Objeto que almacena el id y el estado de una caja.
 class Caja {
    destruida=false;
     constructor(id) {
       this.id = id;
     }
 } 
 
 //Arreglo que contendrá las cajas y su estado.
 arrayCajas =[];
 
 //Guardamos el número de cajas en local Storage. Con este número generamos la cantidad de cajas generadas en template y el array.

 
 
 //Función que inicia las cajas
 this.generarCajas(localStorage.getItem("numCajas"));
 
  
  //Generación de las cajas en base al número de cajas seleccionado
  function generarCajas(numCajas){
 
     let contenedor = document.createElement("div");
     for(let i=0; i<numCajas;i++){
       let caja= new Caja(i);
        arrayCajas.push(caja);
        /* contenedor.innerHTML +=`<img class="caja" onclick="eliminarCaja(${i})" id="caja${i}" width="200px" height="200px" src="src/images/caja.jpg">`; */
        contenedor.innerHTML +=`<img class="caja" id="caja${i}" width="150px" height="150px" src="../src/images/caja.jpg">`;
     }
     //Guardamos el array en local Storage
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
 
  //Reproduce el sonido de victoria tras destruir todas las cajas
  function reproducirVictoria() {
   var audio = document.getElementById('victoria');
   audio.currentTime = 0;
   audio.play();
   alert(`¡Victoria! Has derribado las ${localStorage.getItem("numCajas")} cajas.`);
   let url="../index.html";
   window.location.href = url;
 }
 
 
 //Se encarga de mostrar el marcador
 function actualizarMarcador(numCajas){
 
   let marcadorTemporal = document.getElementById('marcador');
 
 
   if(marcadorTemporal){
     marcadorTemporal.remove(); 
     let marcador = document.createElement("div");
     marcador.id="marcador";
     marcador.className="contadores";
     marcador.innerHTML +=` <br></br>
     <div class="card" style="width: 18rem;">
     <ul class="list-group list-group-flush">
       <li class="list-group-item">TOTAL CAJAS: ${numCajas}</li>
       <li class="list-group-item">CAJAS DESTRUIDAS: ${obtenerCajasDestruidas()}</li>
       <li class="list-group-item">CAJAS RESTANTES: ${numCajas-obtenerCajasDestruidas()}</li>
     </ul>
     </div>`;
    
     document.body.appendChild(marcador);  
   }else{
     let marcador = document.createElement("div");
     marcador.id="marcador";
     marcador.className="contadores";
     marcador.innerHTML +=`<br></br>
     <div class="card" style="width: 18rem;">
     <ul class="list-group list-group-flush">
       <li class="list-group-item">TOTAL CAJAS: ${numCajas}</li>
       <li class="list-group-item">CAJAS DESTRUIDAS: ${obtenerCajasDestruidas()}</li>
       <li class="list-group-item">CAJAS RESTANTES: ${numCajas-obtenerCajasDestruidas()}</li>
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
 
   contadorDestruidas==localStorage.getItem("numCajas")?reproducirVictoria():"";
 
   return contadorDestruidas;
 }
 
 