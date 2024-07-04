/*if (condicion logica){
todas las lineas de codigo si se cumple la condicion logica
}
*/

//crear un programa que le solicite al usuario ingresar su edad y saber si es mayor de edad o no//
const edad = parseInt(prompt("Ingrese su edad: "))
console.log(edad)
//NaN is not a number
//si la edad es mayor o igual a 18 sos mayor de edad
if(edad >=18){
    document.write("La edad ingresada es "+ edad + ", sos mayor de edad")
} 
else{
    document.write("La edad ingresada es "+ edad + ", no sos mayor de edad")
}
