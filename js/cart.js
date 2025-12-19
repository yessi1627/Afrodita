
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// función para guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
  const contador = document.getElementById("cart-count");
  if (!contador) return;

  const totalItems = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  contador.textContent = totalItems;
}

// Función para poder agregar producto al carrito
function agregarAlCarrito(producto) {
  const productoExistente = carrito.find(
    (item) => item.id === producto.id
  );

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1,
    });
  }

  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
}

// funcion de renderizado delk carrito en HTML
function renderizarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  const totalSpan = document.getElementById("carrito-total");

  if (!contenedor || !totalSpan) return;

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;

    const col = document.createElement("div");
    col.className = "col-12";

    col.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 class="mb-1">${producto.nombre}</h6>
            <small>Cantidad: ${producto.cantidad}</small>
          </div>
          <div class="fw-bold">
            $ ${(producto.precio * producto.cantidad).toLocaleString()}
          </div>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });

  totalSpan.textContent = total.toLocaleString();
}

// inicializar carrito al cargar
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  renderizarCarrito();
});
