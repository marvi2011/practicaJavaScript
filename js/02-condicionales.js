/*if (condicion logica){
todas las lineas de codigo si se cumple la condicion logica
}
*/

//crear un programa que le solicite al usuario ingresar su edad y saber si es mayor de edad o no//
/*const edad = parseInt(prompt("Ingrese su edad: "));

console.log(edad);*/
/*if (edad>= 18){
  document.write("La edad ingresada: "+edad+" sos mayor de edad")
  }
  else {document.write("La edad ingresada: "+edad+" no sos mayor de edad")}*/

//preguntar si el numero es valido 1-100, NaN
//NaN is not a number
//si la edad es mayor o igual a 18 sos mayor de edad

// and &&
// or || (en la tecla del 1)
//not !
/*if (edad>=1&&edad<=100){

  if (edad >= 18) {
    document.write("La edad ingresada es " + edad + ", sos mayor de edad");
  } else {
    document.write("La edad ingresada es " + edad + ", no sos mayor de edad");
} }
    else{document.write("No ingresaste un numero válido")}

  //18 a 65 años está obligado a votar
  //16 y 17 optativo, de 66 en adelante es optativo
  //menores de 16 no pueden votar*/

const edad = parseInt(prompt("Ingrese su edad: "));
if (edad >= 1 && edad <= 100) {
  if (edad >= 18 && edad <= 65) {
    document.write(`Usted ingresó: ${edad} años, está obligado a votar`);
  } else {
    //sera que tiene entre 16, 17 o mas de 65
    if (edad == 16 || edad == 17 || edad > 65) {
      document.write(`Usted ingresó: ${edad} años, es optativo votar`);
    } else {
      document.write(`Usted ungresó: ${edad} años, no puede votar`);
    }
  }
}
