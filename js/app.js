document.addEventListener('DOMContentLoaded', (event) => {
  const checkbox = document.getElementById('toggleReserva');
  const reserva = document.getElementById('reserva');
  if (!checkbox.checked) {
    reserva.style.display = 'none';
  }
});

function toggleSeleccion(checkbox, categoria) {
  const li = checkbox.closest('li');
  const lesionadoCheckbox = li.querySelector('.lesionado');
  const listaSeleccionados = document.getElementById(`seleccionados${capitalizeFirstLetter(categoria)}`);
  const fullText = li.textContent.trim();
  const playerName = fullText.split(' (')[0];  // Extraer solo el nombre del jugador

  if (lesionadoCheckbox.checked) {
    checkbox.checked = false; // No permitir selección si está lesionado
    return;
  }

  if (checkbox.checked) {
    const selectedLi = document.createElement("li");
    selectedLi.textContent = playerName;
    selectedLi.id = `${categoria}-${playerName}`;
    listaSeleccionados.appendChild(selectedLi);
  } else {
    const selectedLi = document.getElementById(`${categoria}-${playerName}`);
    if (selectedLi) {
      selectedLi.remove();
    }
  }
  mostrarReserva(); // Actualizar la lista de reserva
}

function toggleLesion(checkbox, categoria) {
  const li = checkbox.closest('li');
  const seleccionCheckbox = li.querySelector('input[type="checkbox"]:not(.lesionado)');

  if (checkbox.checked) {
    seleccionCheckbox.checked = false; // Desmarcar selección si está lesionado
    toggleSeleccion(seleccionCheckbox, categoria); // Asegurar la lógica de deselección
  }
  mostrarReserva(); // Actualizar la lista de reserva
}

function toggleReserva() {
  const checkbox = document.getElementById('toggleReserva');
  const reserva = document.getElementById('reserva');
  if (checkbox.checked) {
    mostrarReserva();
    reserva.style.display = 'block';
  } else {
    reserva.style.display = 'none';
  }
}

function mostrarReserva() {
  const reserva = document.getElementById('reserva');
  reserva.innerHTML = ''; // Limpiar la lista de reserva

  const mayores = Array.from(document.getElementById('mayores').querySelectorAll('li'));
  const sub20 = Array.from(document.getElementById('sub20').querySelectorAll('li'));

  mayores.concat(sub20).forEach(li => {
    const seleccionCheckbox = li.querySelector('input[type="checkbox"]:not(.lesionado)');
    const lesionadoCheckbox = li.querySelector('.lesionado');
    if (!seleccionCheckbox.checked && !lesionadoCheckbox.checked) { // Solo si no está seleccionado ni lesionado
      const fullText = li.textContent.trim();
      const playerName = fullText.split(' (')[0];
      const newLi = document.createElement("li");
      newLi.textContent = playerName; // Solo mostrar el nombre
      reserva.appendChild(newLi);
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
