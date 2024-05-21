function toggleSeleccion(checkbox, categoria) {
  const li = checkbox.parentElement;
  const listaSeleccionados = document.getElementById(`seleccionados${capitalizeFirstLetter(categoria)}`);
  const fullText = li.textContent.trim();
  const playerName = fullText.split(' (')[0];  // Extraer solo el nombre del jugador

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
  const mayores = Array.from(document.getElementById('mayores').querySelectorAll('li input:not(:checked)'));
  const sub20 = Array.from(document.getElementById('sub20').querySelectorAll('li input:not(:checked)'));
  const reserva = document.getElementById('reserva');
  reserva.innerHTML = '';

  mayores.concat(sub20).forEach(input => {
    const li = input.closest('li');
    const fullText = li.textContent.trim();
    const playerName = fullText.split(' (')[0];
    const newLi = document.createElement("li");
    newLi.textContent = fullText;  // Aquí se muestra el nombre y la posición en la lista de reserva
    reserva.appendChild(newLi);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
