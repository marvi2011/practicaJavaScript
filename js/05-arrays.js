//como declarar un array
const peliculas = [];

//como declara un array con datos
const series = ["friends", 4, "the big bang theory", true, "the nanny"];

//cantidad de elementos de un array
document.write(
  `<p>Cantidad de elementos en el array series: ${series.length}</p>`
);
document.write(`El primer elemento del array es: ${series[0]}</p>`);
document.write(
  `El primer elemento del array es: ${series[series.length - 1]}</p>`
);

//mostrar los elementos del array
document.write(
  `<h2>Cantidad de elementos en el array series: ${series.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write(`<li>${series[i]}</li>`);
}
document.write("</ul>");

//agregar un elemento en el array
series.unshift("vikings", 2024) //al comienzo

document.write(
    `<h2>Cantidad de elementos en el array series: ${series.length}</h2>`
  );
  document.write("<ul>");
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write("</ul>");

  //agregar elementos al final del array
  series.push("breaking bad", 300)
  document.write(
    `<h2>Cantidad de elementos en el array series: ${series.length}</h2>`
  );
  document.write("<ul>");
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write("</ul>");
