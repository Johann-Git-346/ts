window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const marca = params.get("marca");
    const categoria = params.get("categoria");
    const precio = params.get("precio");

    // Muestra los filtros aplicados
    document.getElementById("filtros-aplicados").innerHTML = `
        <p>Marca: ${marca || "Todas"}</p>
        <p>Categoría: ${categoria || "Todas"}</p>
        <p>Precio: ${precio || "Cualquier precio"}</p>
    `;
};

<script>
    function filtrar() {
            const marca = document.getElementById("marca").value.toLowerCase();
            const categoria = document.getElementById("categoria").value.toLowerCase();
            const precio = document.getElementById("precio").value;

            // Crea una URL dinámica basada en los filtros seleccionados
            let queryParams = `?marca=${marca}&categoria=${categoria}&precio=${precio}`;

            // Define la URL base a la que redirigir (puedes cambiarla por tu dominio o página específica)
            let baseUrl = "javascript.js"; // Cambia esto por la URL que desees

            // Redirige al usuario con los parámetros de búsqueda
            window.location.href = baseUrl + queryParams;
        }
</script>