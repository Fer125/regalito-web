document.addEventListener("DOMContentLoaded", () => {
  const fotos = document.querySelectorAll(".contenedor-fotos img");
  const mensajeFinal = document.getElementById("mensaje-final");
  let indice = 0;
  let mensajeMostrado = false;

  // Función para mostrar las fotos de manera cíclica
  function mostrarFoto() {
    fotos.forEach(foto => foto.classList.remove("activo"));
    fotos[indice].classList.add("activo");

    if (indice === fotos.length - 1) {
      if (!mensajeMostrado) {
        mensajeFinal.style.opacity = "1";
        mensajeMostrado = true;
      }
      indice = 0;
      setTimeout(mostrarFoto, 4000);
    } else {
      indice++;
      setTimeout(mostrarFoto, 4000);
    }
  }

  if (fotos.length > 0) {
    mostrarFoto();
  }

  // Función para crear los pétalos de sakura
  function crearPetalo() {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");
    petalo.style.left = Math.random() * window.innerWidth + "px"; // Posición horizontal aleatoria
    petalo.style.animationDuration = 5 + Math.random() * 5 + "s"; // Duración aleatoria para la animación de caída
    let escala = 0.5 + Math.random(); // Escala aleatoria para los pétalos
    petalo.style.transform = `scale(${escala})`; // Aplicar la escala
    petalo.style.opacity = 0.6 + Math.random() * 0.4; // Opacidad aleatoria para un efecto de suavizado
    document.body.appendChild(petalo);

    setTimeout(() => {
      petalo.remove(); // Eliminar el pétalo después de que haya caído
    }, 10000); // Tiempo en milisegundos (10 segundos)
  }

  setInterval(crearPetalo, 300); // Crear un pétalo cada 300ms
});
