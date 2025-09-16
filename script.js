document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('tema-btn').addEventListener('click', function() {
    document.body.classList.toggle('claro');
  });

  // Mostrar fecha y hora actual en el footer
  function actualizarFechaHora() {
    const ahora = new Date();
    const opciones = { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    document.getElementById('fecha-hora').textContent = 
      ahora.toLocaleDateString('es-AR', opciones);
  }
  actualizarFechaHora();
  setInterval(actualizarFechaHora, 1000);
});

document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensaje-enviado').style.display = 'block';
  setTimeout(() => {
    document.getElementById('mensaje-enviado').style.display = 'none';
    e.target.reset();
  }, 2000);
});

document.querySelectorAll('.caja').forEach(function(caja) {
  caja.classList.add('visible');
});

let visitas = sessionStorage.getItem('visitas') || 0;
visitas++;
sessionStorage.setItem('visitas', visitas);
document.getElementById('contador-visitas').textContent = 
  `Visitas en esta sesión: ${visitas}`;