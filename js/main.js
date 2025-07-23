
//animacion al bajar
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.animacion');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Filtro de proyectos

document.addEventListener("DOMContentLoaded", () => {
  const botonesFiltro = document.querySelectorAll(".filtro-btn");
  const items = document.querySelectorAll(".proyecto-item");

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      const filtro = boton.getAttribute("data-filtro");

      // Cambia clase activa
      botonesFiltro.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");

      items.forEach(item => {
        const categoria = item.getAttribute("data-categoria");

        if (filtro === "todos" || filtro === categoria) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

//Modo oscuro/claro

document.addEventListener("DOMContentLoaded", () => {
  const botonTema = document.getElementById('toggle-tema');
  const body = document.body;

  // Aplicar el tema guardado
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'oscuro') {
    body.classList.add('modo-oscuro');
    botonTema.textContent = '🌙';
  } else {
    body.classList.remove('modo-oscuro');
    botonTema.textContent = '💡';
  }

  // Cambiar de modo al hacer clic
  botonTema.addEventListener('click', () => {
    const modoOscuroActivo = body.classList.toggle('modo-oscuro');
    botonTema.textContent = modoOscuroActivo ? '🌙' : '💡';

    // Guardar el modo actual
    localStorage.setItem('modo', modoOscuroActivo ? 'oscuro' : 'claro');
  });
});

// para verificacion de envio de formulario

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");
  const mensaje = document.getElementById("mensaje-confirmacion");

  if (formulario) {
    formulario.addEventListener("submit", function(e) {
      e.preventDefault();

      const datos = new FormData(formulario);

      fetch("https://formsubmit.co/ajax/rousse11282001@gmail.com", {
        method: "POST",
        body: datos,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          formulario.reset();
          mensaje.classList.remove("oculto");
          mensaje.classList.add("visible");
        } else {
          alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
        }
      }).catch(error => {
        alert("Error de conexión.");
      });
    });
  }
});



