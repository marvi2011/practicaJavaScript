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
const series = ["friends", 4, "the big bang theory", true, "the nanny"];
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
series.unshift("vikings", 2024); //al comienzo
mostrarSeries();

//agregar elementos al final del array
series.push("breaking bad", 300);
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

series[3]="pokemon"
mostrarSeries()