//ejercicio 9 del trabajo práctico N° 1
//1 pedir frase (en este caso le indicamos que sea de 4 caracteres)
const frase = prompt("Ingrese una frase de 4 caracteres:").toLowerCase();
//const frase =promt("Ingrese una frse de 4 caracteres:").toupperecase (directamente guarda la frase en mayusculas)
//se usa el console.log para verificar que la frase se guarde en la variable
console.log(frase);
// ahora ingresamos una funcion que no hace que toda la frase se transforme a minusculos
console.log(frase.toLowerCase());
// pasa la frase a mayusculas
console.log(frase.toUpperCase());

/*LENGHT: cuenta cuantos caracteres tiene la frase
console.log(frase.lenght)*/

/*SUBSTRING: nos devuelve el rango de caracteres que nosotros le indicamos... es decir extrae el rango que le indicamos
console.log(frase.substring(0,3)) nos devuelve desde el primer caracter hasta el 3, o sea, 4 caracteres*/

/*CHARAT: nos devuelve la posicion de un solo caracter
console.log(frase.charat(3))*/

if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u"
) {
  document.write(frase.charAt(0));
}
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u"
) {
  document.write(frase.charAt(1));
}
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u"
) {
  document.write(frase.charAt(2));
}
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u"
) {
  document.write(frase.charAt(3));
}
if (
  frase.charAt(4) === "a" ||
  frase.charAt(4) === "e" ||
  frase.charAt(4) === "i" ||
  frase.charAt(4) === "o" ||
  frase.charAt(4) === "u"
) {
  document.write(frase.charAt(4));
}