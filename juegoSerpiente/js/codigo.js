$("#iniciar").ready(function () {
  var serpiente; //array de la serpiente

  var canvas = $("#canvas")[0]; //me traigo el tablero de juego
  var contexto = canvas.getContext("2d"); // hacemos el tablero bidimensional
  var ancho = $("#canvas").width(); // guardamos el ancho y el alto
  var alto = $("#canvas").height();

  // necesitamos declarar valores iniciales
  var direc;

  function inicial() {
    direc = "right"; // empezamos siempre hacia la derecha
    //con una longitud x
    pintarSerpiente(); //pintamos la serpiente
    pintarComida(); //pintamos una galleta si no hay en el tablero. Se mirara cada cierto tiempo si hay comida en el tablero
  }

  function pintarSerpiente() {}

  function pintarComida() {}
});
