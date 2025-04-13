document.addEventListener('DOMContentLoaded', function() {
    // Lista de eventos (puedes cargarlos desde un JSON o API en el futuro)
    const eventos = [
        { id: '202501', titulo: 'Enero 2025 - Lluvia', archivo: 'eventos/202501.html' },
        { id: '202502', titulo: 'Febrero 2025 - Lluvia', archivo: 'eventos/202502.html' },
        { id: '20250307', titulo: '7/3/2025 - Lluvia extrema en Bahia Blanca', archivo: 'eventos/20250307.html' },
        // Agrega más eventos según sea necesario
    ];

    const listaEventos = document.getElementById('lista-eventos');
    const contenidoEvento = document.getElementById('contenido-evento');

    // Cargar la lista de eventos en el menú
    eventos.forEach(evento => {
        const li = document.createElement('li');
        li.textContent = evento.titulo;
        li.dataset.archivo = evento.archivo;
        li.addEventListener('click', () => cargarEvento(evento.archivo));
        listaEventos.appendChild(li);
    });

    // Función para cargar el contenido del evento
    function cargarEvento(archivo) {
        fetch(archivo)
            .then(response => response.text())
            .then(html => {
                contenidoEvento.innerHTML = html;
            })
            .catch(err => {
                contenidoEvento.innerHTML = `<p>Error al cargar el evento: ${err.message}</p>`;
            });
    }

    // Cargar el primer evento por defecto
    if (eventos.length > 0) {
        cargarEvento(eventos[0].archivo);
    }
});
