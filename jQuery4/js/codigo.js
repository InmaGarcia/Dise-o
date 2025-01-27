// $(function () {
//   consoleIni();
//   let cadena = "texto 2";
//   muestraCadena(cadena);
// });

// function consoleIni() {
//   console.log("todo ok");
// }

// function muestraCadena(cad) {
//   console.log(cad);
// }

// $(function () {
//   $("button").click(function () {
//     inicio();
//   });
// });

// function inicio() {
//   $("button").hide();
// }

$(document).on("keydown", function (event) {
  if (event.key == "ArrowRight") {
    console.log("Derecha");
    muevete("left", 10);
  } else if (event.key == "ArrowLeft") {
    console.log("Izquierda");
    muevete("left", -10);
  } else if (event.key == "ArrowUp") {
    console.log("Arriba");
    muevete("top", -10);
  } else {
    console.log("Abajo");
    muevete("top", 10);
  }
});

function muevete(dire, cant) {
  var count = 0;
  let intervalo = setInterval(function () {
    nuevoValor = parseInt($(".bloque").css(dire));

    $(".bloque").css(dire, nuevoValor + cant);
    count++;
    if (count >= 6) {
      clearInterval(intervalo);
    }
  }, 250);
}
