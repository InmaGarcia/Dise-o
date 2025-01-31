$("#iniciar").on("click", function () {
  setTimeout(function () {
    $(".container").fadeOut(10);
    var replaced = jQuery("#titulo").html().replace("Acceso", "Cuenta"); // Obtenemos el texto a cambiar
    jQuery("#titulo").html(replaced);
  }, 500);

  setTimeout(function () {
    $(".container2").fadeIn(20);
  }, 500);
});

$(document).ready(function () {
  function comprobacion() {
    if ($("#email").val() == "" || $("#pass").val() == "") {
      $(".btn2").attr("disabled", "disabled");
    } else {
      $(".btn2").removeAttr("disabled");
    }
  }
  setInterval(comprobacion, 10);
});

$("#crear").on("click", function () {
  setTimeout(function () {
    $(".container").fadeOut(10);
    var replaced = jQuery("#titulo").html().replace("Acceso", "Cuenta"); // Obtenemos el texto a cambiar
    jQuery("#titulo").html(replaced);
  }, 500);

  setTimeout(function () {
    $(".container3").fadeIn(20);
  }, 500);
});
