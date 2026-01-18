document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("checkout-carrito");
  const totalSpan = document.getElementById("checkout-total");
  const form = document.getElementById("checkout-form");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function renderizarCheckout() {
    if (!contenedor || !totalSpan) return;

    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;

      const div = document.createElement("div");
      div.className = "card shadow-sm";

      div.innerHTML = `
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 class="mb-1">${producto.nombre}</h6>
            <small>Cantidad: ${producto.cantidad}</small>
          </div>
          <div class="fw-bold">
            $ ${(producto.precio * producto.cantidad).toLocaleString()}
          </div>
        </div>
      `;

      contenedor.appendChild(div);
    });

    totalSpan.textContent = total.toLocaleString();
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();

      if (!nombre || !email || !direccion || !telefono) {
        alert("Por favor completa todos los campos");
        return;
      }

      // Simulación de pago exitoso
      window.location.href = "success.html";
    });
  }

  renderizarCheckout();
});
