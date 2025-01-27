$(function () {
  $(".bloque").hide();
  $("button").click(function () {
    // if ($(".bloque").hide()) {
    //   $(".bloque").show();
    // } else {
    //   $(".bloque").hide();
    // }
    $(".bloque").toggle(); //muestra u oculta la capa
  });
});
