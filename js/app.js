// pagina para hacer funcinal el formulario
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");
  const mensaje = document.getElementById("mensaje-confirmacion");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = new FormData(formulario);

    fetch("/enviar", {
      method: "POST",
      body: datos
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'ok') {
        formulario.reset();
        mensaje.classList.remove("oculto");
      } else {
        alert("Error al enviar: " + (data.message || "Intenta nuevamente."));
      }
    })
    .catch(() => {
      alert("Error de conexión. Verifica tu red o vuelve a intentarlo.");
    });
  });
});

