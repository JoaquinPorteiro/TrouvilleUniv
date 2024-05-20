function toggleSeleccion(checkbox, categoria) {
  const li = checkbox.parentElement;
  const listaSeleccionados = document.getElementById(`seleccionados${capitalizeFirstLetter(categoria)}`);
  const playerName = li.textContent.trim();

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
}

function mostrarSeleccionados() {
  const seleccionadosMayores = Array.from(document.getElementById('seleccionadosMayores').children).map(li => li.textContent.trim());
  const seleccionadosSub20 = Array.from(document.getElementById('seleccionadosSub20').children).map(li => li.textContent.trim());

  alert(`Jugadores Seleccionados (Mayores): ${seleccionadosMayores.join(', ')}\nJugadores Seleccionados (Sub 20): ${seleccionadosSub20.join(', ')}`);
}

function mostrarReserva() {
  const mayores = Array.from(document.getElementById('mayores').children);
  const sub20 = Array.from(document.getElementById('sub20').children);
  const reserva = document.getElementById('reserva');

  mayores.forEach(li => reserva.appendChild(li.cloneNode(true)));
  sub20.forEach(li => reserva.appendChild(li.cloneNode(true)));
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function mostrarReserva() {
  const mayores = Array.from(document.getElementById('mayores').querySelectorAll('li input:not(:checked)'));
  const sub20 = Array.from(document.getElementById('sub20').querySelectorAll('li input:not(:checked)'));
  const reserva = document.getElementById('reserva');
  reserva.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

  mayores.concat(sub20).forEach(input => {
    const li = input.closest('li');
    const playerName = li.textContent.trim();
    const newLi = document.createElement("li");
    newLi.textContent = playerName;
    reserva.appendChild(newLi);
  });
}



function toggleReserva() {
  const checkbox = document.getElementById('toggleReserva');
  const reserva = document.getElementById('reserva');
  if (checkbox.checked) {
    mostrarReserva(); // Esta función llena y muestra la lista
    reserva.style.display = 'block'; // Asegúrate de que la lista sea visible
  } else {
    reserva.style.display = 'none'; // Oculta la lista cuando el checkbox no esté marcado
  }
}

