// bucles while, do-while, for

// while(condicion logica){
// todas las lineas de codigo que quiero repetir
// agregar una linea que haga que la condicion logica se deje de cumplir
// }

/*let numero = 1;
while (numero <= 10) {
  document.write(`<p>Linea número ${numero}</p>`);
  numero = numero + 1;
}*/

/* do{Todas las lineas de codigo que quiero repetir
agregar una lina que haga que la condicion logica se deje de cumplir
} while(condicion logica)*/
let renglon = 1;
do {
  document.write("<p>Renglón número </p>" + renglon);
  renglon++; // se puede simplificar asi = renglon + 1;
} while (renglon <= 5);

/* for(inicializar euna variable; condicion logica; incrementar/decrementar la variable){todas las lineas de codigo que quiero repetir}*/
for (let contador = 10; contador >= 1; contador--) {
  document.write("<p>Cuenta regresiva N°" + contador +" </p>");
}
