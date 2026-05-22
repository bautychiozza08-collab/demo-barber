function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
  window.scrollTo(0, 0);
}

function selectService(service) {
  document.getElementById("service").value = service;
  showPage("turnos");
}

function reserveWhatsApp() {
  const name = document.getElementById("name").value || "Cliente";
  const date = document.getElementById("date").value || "A coordinar";
  const time = document.getElementById("time").value || "A coordinar";
  const service = document.getElementById("service").value;

  const message =
    `Hola! Soy ${name}%0A` +
    `Quiero reservar un turno en NOIR Barber Club.%0A%0A` +
    `Servicio: ${service}%0A` +
    `Fecha: ${date}%0A` +
    `Hora: ${time}`;

  window.open(`https://wa.me/5490000000000?text=${message}`, "_blank");
}