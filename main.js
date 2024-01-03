function victoria(jarrones,balas){
    alert("✅¡VICTORIA! Bien hecho, vaquero. El número de balas 🩹 ("+ balas + ") que disparaste es igual al número de jarrones 🏺("+ jarrones+") que destruiste. Eres bienvenido en el pueblo.");
}
function derrota(jarrones,balas){
    alert("❌¡DERROTA! Lo siento, vaquero. El número de balas 🩹 ("+ balas + ") que disparaste NO es igual al número de jarrones 🏺("+ jarrones+") que destruiste. Ahora... Muere (te disparan por la espalda)");
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


do{

alert("Bienvenido, vaquero. Sé que acabas de llegar al pueblo, pero... ¿Listo para el desafío? Ingresa un número  de balas 🩹 entre el 1 al 6. Si aciertas al número de jarrones 🏺 generados aleatoriamente, demostrarás tu valía, pero si quedas por debajo o por encima del número de jarrones 🏺, pierdes nuestro respeto.");
balas=0;
balas= prompt("Ingrese un número de balas 🩹 entre 1 y 6 (tu vida depende de ello): ");
jarrones=getRandomInt(6)+1;
balaToNumber=parseInt(balas);

if(balas==0 || balas==null){
  
alert("¿Acaso te acobardaste? qué enorme decepción para este pueblo. No dejamos que los cobardes sigan con vida... ¡Pium! 💀 (caes al piso) ");

}else if(isNaN(balaToNumber)){
    alert("¿No sabes lo que es un número siquiera? sólo la muerte espera a los impertinentes como tú... ¡Pium! 💀 (caes al piso)");
}else if(balas<0 || balas>6){
    alert("¿Piensas que esto es un juego? qué enorme decepción para este pueblo. No dejamos que los cobardes sigan con vida... ¡Pium! 💀 (caes al piso) ");
}else{

    if(balas==jarrones){
        victoria(jarrones,balas);
    }else{
        derrota(jarrones,balas);
    }
}

reintento= prompt("¿Volver a jugar? (y/n)");
reintento= reintento.toLowerCase();

}while(reintento!=null && reintento=="y");







