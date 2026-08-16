function normalizar(t){return t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function buscarContenido(){
 const input=document.getElementById("buscar"); if(!input)return;
 const texto=normalizar(input.value); if(texto===""){alert("Escribe una palabra para buscar.");return}
 const rutas=[
  [["inicio","principal","bienvenidos"],"index.html"],
  [["nosotros","acerca","escuela","institucion"],"nosotros.html"],
  [["filosofia","mision","vision","valores"],"filosofia.html"],
  [["historia","antecedentes"],"historia.html"],
  [["oferta","educativa","educacion","secundaria","estudios"],"oferta.html"],
  [["inscripcion","inscripciones","registro","ingreso"],"inscripcion.html"],
  [["colegiatura","colegiaturas","pago","pagos"],"colegiaturas.html"],
  [["contacto","telefono","correo"],"contacto.html"],
  [["ubicacion","direccion","mapa"],"ubicacion.html"],
  [["instalaciones","salones","aulas","plantel"],"instalaciones.html"],
  [["blog","noticias","publicaciones","actividades","eventos","matematicas","altares"],"blog.html"]
 ];
 for(const [palabras,pagina] of rutas){if(palabras.some(p=>texto.includes(p))){window.location.href=pagina;return}}
 alert("No se encontraron resultados para: "+input.value)
}
document.addEventListener("DOMContentLoaded",()=>{const input=document.getElementById("buscar");if(input)input.addEventListener("keydown",e=>{if(e.key==="Enter")buscarContenido()})});
