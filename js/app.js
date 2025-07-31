// pagina para hacer funcinal el formulario
document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("/enviar", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'ok') {
      this.reset();
      document.getElementById("mensaje-confirmacion").classList.remove("oculto");
    } else {
      alert("Error al enviar: " + data.message);
    }
  })
  .catch(() => alert("Error de conexión"));
});
