// Mapeo de botones con sus URLs correspondientes
const buttonPageMapping = {
  maquillaje: "maquillaje.html",
  perfume: "perfume.html",
  capilar: "capilar.html",
  facial: "facial.html",
  corporal: "corporal.html",
  hogar: "hogar.html",
};

// cojemos todos los botones del menu
const buttons = document.querySelectorAll(".btn-menu");

// Recorremos los botones y les asociamos el evento click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id; // Obtener el ID del botón clicado
    const pageUrl = buttonPageMapping[buttonId]; // Buscar la URL correspondiente

    if (pageUrl) {
      window.location.href = pageUrl; // Redirigir a la URL
    } else {
      console.error(`No se encontró una URL para el botón con ID: ${buttonId}`);
    }
  });
});
