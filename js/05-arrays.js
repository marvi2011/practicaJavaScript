function mostrarSeries() {
  document.write(
    `<h2>Cantidad de elementos en el array series: ${series.length}</h2>`
  );
  document.write("<ul>");
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write("</ul>");
}

//como declarar un array
const peliculas = [];

//como declara un array con datos
const series = ["friends", "4", "the big bang theory", true, "the nanny"];
mostrarSeries();

//cantidad de elementos de un array
mostrarSeries();
document.write(
  `<p>El ultimo elemento del array es: ${series[series.length - 1]}</p>`
);
document.write(`<p>El primer elemento del array es: ${series[0]}</p>`);

//mostrar los elementos del array
/* todo este codigo se puede escribir mas corto usando funciones, para este caso es mostrarSerie 
document.write(
  `<h2>Cantidad de elementos en el array series: ${series.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write(`<li>${series[i]}</li>`);
}
document.write("</ul>");*/
mostrarSeries();

//agregar un elemento en el array
series.unshift("vikings", "2024"); //al comienzo
mostrarSeries();

//agregar elementos al final del array
series.push("breaking bad", "300");
mostrarSeries();

//agregar elementos en el medio del array
series.splice(3, 0, "Avatar");
mostrarSeries();

//borrar elementos del array
series.shift();
mostrarSeries();

//borrar el ultimo elementos del array
series.pop();
mostrarSeries();

//para borrar elementos del medio del array
series.splice(5, 1);
mostrarSeries();
//series.splice(5) borra todos los elementos desde la posicion 5 en adelante

series[3] = "pokemon";
mostrarSeries();

series.push(
  "Harry Potter y la piedra filosofal",
  "Rambo I",
  "Rambo II",
  "Harry Potter y la cámara secreta",
  "Rambo III",
  "Harry Potter y el prisionero de azkaban"
);
mostrarSeries();

//buscar un elemento en el array
const harryPotter = series.find(
  (item) => item === "Harry Potter y la cámara secreta"
);
const vengadores = series.find((item) => item === "vengadores");
const harryP = series.find((item) => item === "Harry Potter");
const harryPotter2 = series.find((item) =>
  item.toLowerCase().includes("harry potter")
);

console.log(series[0].toLowerCase);
console.log(harryPotter);
console.log(vengadores);
console.log(harryP);
document.write(`<h3>La peli buscada: ${harryPotter}</h3>`);
document.write(`<h3>La peli buscada: ${vengadores}</h3>`);
//existe valor valido en la varialbel vengadores?
if (vengadores) {
  document.write(`<h3>La peli buscada: Encpntre la peli</h3>`);
} else {
  document.write(`<h3>La peli buscada: No se encontró Vengadores</h3>`);
}

//operadpr ternario (condicion logica)? todo lo wue quiero si la condicion se cumplle : todo lo que quiero hacer si no se cumple la condicion

vengadores
  ? document.write(`<h3>La peli buscada: ${vengadores}</h3>`)
  : document.write(`<h3>La peli buscada: No se encontró Vengadores</h3>`);

document.write(
  `<h3>Peli buscada: ${
    vengadores ? vengadores : "no se encontro vengadores"
  }</h3>`
);
const peli = "Harry Potter y el misterio del principe";
console.log(peli.includes("Harry Potter"));
console.log(peli.includes("Voldemort"));

//buscar toda la saga de rambo (filter)
const sagaRambo = series.filter((elemento) => elemento === "Rambo");
console.log(sagaRambo);
const sagaRambo2 = series.filter((elemento) => elemento.includes("Rambo"));
console.log(sagaRambo2);

document.write(
  `<h2>Array de Rambo, cantidad de elementos: ${sagaRambo2.length}</h2>`
);
document.write("<ol>");
sagaRambo2.map((item, posicion) =>
  document.write(`<li>${item} - posicion:${posicion}</li>`)
);
document.write("</ol>");

//forEach
series.forEach((item) => console.log("forEach -" + item));
