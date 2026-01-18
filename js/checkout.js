document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("checkout-carrito");
  const totalSpan = document.getElementById("checkout-total");
  const form = document.getElementById("checkout-form");
  const confirmacion = document.getElementById("checkout-confirmacion");
  const btnPagar = document.getElementById("btn-pagar");
  const btnText = document.getElementById("btn-text");
  const btnLoader = document.getElementById("btn-loader");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let procesandoPago = false;

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

  function limpiarCarrito() {
    localStorage.removeItem("carrito");
    carrito = [];
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (procesandoPago) return;

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();

      if (!nombre || !email || !direccion || !telefono) {
        alert("Por favor completa todos los campos para continuar");
        return;
      }

      // Simulación de pago
      procesandoPago = true;
      btnPagar.disabled = true;
      btnText.textContent = "Procesando pago...";
      btnLoader.classList.remove("d-none");

      // Simulación  de pasarela de pago
      setTimeout(() => {
        limpiarCarrito();

        if (typeof actualizarContadorCarrito === "function") {
          actualizarContadorCarrito();
        }

        window.location.href = "success.html";
      }, 2500);
    });
  }

  renderizarCheckout();
});
