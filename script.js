function buscarContenido() {
  const texto = document.getElementById("buscar").value.trim();

  if (texto === "") {
    alert("Escribe una palabra para buscar.");
    return;
  }

  alert("Búsqueda de ejemplo: " + texto);
}