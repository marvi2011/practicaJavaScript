/* 0=Domingo
1=Lunes
2=Martes
3=Miercoles
4=Jueves
5=Viernes
6=Sabado*/

/*if(opcion===0){
    document.write("<p>Hoy es Domingo</p>")
}else if(opcion===1){
    document.write("<p>Hoy es Lunes</p>")
}else if(opciom===2){
document.write("<p>Hoy es Martes</p>")
}*/

/*... se hace lo mismo hasta el domingo y al final else{document.write("Ingresaste un valor invalido")*/
do{
const opcion = parseInt(
    prompt(
      "Ingresa un valor: 0=Domingo, 1=Lunes, 2=Martes, 3=Miercoles, 4=Jueves, 5=Viernes, 6=Sabado"
    )
  );
switch (opcion) {
  case 0:
    document.write("<p>Hoy es Domingo</p>");
    break;
  case 1:
    document.write("<p>Hoy es Lunes</p>");
    break;
  case 2:
    document.write("<p>Hoy es Martes</p>");
    break;
  case 3:
    document.write("<p>Hoy es Miercoles</p>");
    break;
  case 4:
    document.write("<p>Hoy es Jueves</p>");
    break;
  case 5:
    document.write("<p>Hoy es Viernes</p>");
    break;
  case 6:
    document.write("<p>Hoy es Sabado</p>");
    break;
  default:
    document.write("<p>Ingresaste un valor invalido</p>");
}}
while(confirm("Queres realizar esta operacion nuevamente?"))
