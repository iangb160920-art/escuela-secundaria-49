function buscarContenido() {

  const input = document.getElementById("buscar");

  if (!input) {
    return;
  }

  const texto = input.value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (texto === "") {
    alert("Escribe una palabra para buscar.");
    return;
  }

  // NOSOTROS
  if (
    texto.includes("nosotros") ||
    texto.includes("escuela") ||
    texto.includes("institucion") ||
    texto.includes("quienes somos")
  ) {
    window.location.href = "nosotros.html";
    return;
  }

  // OFERTA EDUCATIVA
  if (
    texto.includes("oferta") ||
    texto.includes("educacion") ||
    texto.includes("educativa") ||
    texto.includes("secundaria") ||
    texto.includes("estudios")
  ) {
    window.location.href = "oferta.html";
    return;
  }

  // ACTIVIDADES
  if (
    texto.includes("actividad") ||
    texto.includes("actividades") ||
    texto.includes("matematicas") ||
    texto.includes("concurso") ||
    texto.includes("altares") ||
    texto.includes("eventos")
  ) {
    window.location.href = "actividades.html";
    return;
  }

  // CONTACTO
  if (
    texto.includes("contacto") ||
    texto.includes("direccion") ||
    texto.includes("ubicacion") ||
    texto.includes("facebook") ||
    texto.includes("telefono")
  ) {
    window.location.href = "contacto.html";
    return;
  }

  // INICIO
  if (
    texto.includes("inicio") ||
    texto.includes("principal") ||
    texto.includes("bienvenidos")
  ) {
    window.location.href = "index.html";
    return;
  }

  alert("No se encontraron resultados para: " + input.value);
}


// BUSCAR PRESIONANDO ENTER
document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("buscar");

  if (input) {

    input.addEventListener("keydown", function (event) {

      if (event.key === "Enter") {
        buscarContenido();
      }

    });

  }

});
