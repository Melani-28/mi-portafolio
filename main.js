// Ejemplo: Scroll suave al hacer clic
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(enlace.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

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

