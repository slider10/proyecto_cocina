function funcion1 (){
var lunes=0;
var martes=0;
var miercoles=0;
var jueves=0;
var viernes=0;
var compra1=0;
var compra2=0;
var compra3=0;
var compra4=0;
var compra5=0;
var resultado=0;
    
lunes=prompt("compra de hoy lunes:");
compra1=prompt("cuanto es el costo de compras")

martes=prompt("compra de hoy martes:");
compra2=prompt("cuanto es el costo de compras")

miercoles=prompt("compra de hoy miercoles:");
compra3=prompt("cuanto es el costo de compras")

jueves=prompt("compra de hoy jueves:");
compra4=prompt("cuanto es el costo de compras")

viernes=prompt("compra de hoy viernes:");
compra5=prompt("cuanto es el costo de compras")





document.getElementById("demo1").innerHTML=lunes;
document.getElementById("demo2").innerHTML=compra1;

document.getElementById("demo3").innerHTML=martes;
document.getElementById("demo4").innerHTML=compra2;

document.getElementById("demo5").innerHTML=miercoles;
document.getElementById("demo6").innerHTML=compra3;

document.getElementById("demo7").innerHTML=jueves;
document.getElementById("demo8").innerHTML=compra4;

document.getElementById("demo9").innerHTML=viernes;
document.getElementById("demo10").innerHTML=compra5;

resultado=(Number(compra1)+Number(compra2)+Number(compra3)+Number(compra4)+Number(compra5));

document.getElementById("demo11").innerHTML = resultado;

document.getElementById("demo12").innerHTML = "******* <br> COMPRAS SEMANALES <br> ******** <br> COMPRA LUNES: " +lunes + "<br> COSTO DEL LUNES:" +compra1;







}