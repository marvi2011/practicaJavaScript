// funciones declarativas
function saludar() {
  document.write("<p>Hola mundo</p>");
}

function saludarPersona(nombre, apellido) {
  document.write(`<p>Hola ${nombre}, ${apellido}</p>`);
}

//funciones que retornan un valor

/*function sumar(numero1, numero2) {
  const resultado = numero1 + numero2;
  return resultado};*/

  //tambien se puede poner asi: return numero1+numero2
  //funciones arrow
const sumar = (numero1, numero2) => {
  return numero1 + numero2;
};



//llamar o invocar persona
saludar();
saludarPersona("tomas", "herrero");
const nombrePersona = prompt("Ingrese el nombre de la persona");
const apellidoPersona = prompt("Ingrese el apellido de la persona");

saludarPersona(nombrePersona, apellidoPersona);

sumar(20, 15); //este es un comando para sumar pero el resultado no lo guarda en ningun lado
const resultado = sumar(20, 5); //aqui si se guarda
document.write(`<p>El resultado de la suna es: ${resultado}</p>`);
document.write(`<p>El resultado de la suma es: ${sumar(3, 5)}</p>`);

