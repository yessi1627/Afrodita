let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
  const contador = document.getElementById("cart-count");
  if (!contador) return;

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contador.textContent = totalItems;
}

// Agregar producto
function agregarAlCarrito(producto) {
  const productoExistente = carrito.find((item) => item.id === producto.id);

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

// Aumentar cantidad
function aumentarCantidad(id) {
  const producto = carrito.find((item) => item.id === id);
  if (producto) {
    producto.cantidad++;
    guardarCarrito();
    actualizarContadorCarrito();
    renderizarCarrito();
  }
}

// Disminuir cantidad
function disminuirCantidad(id) {
  const producto = carrito.find((item) => item.id === id);
  if (producto) {
    producto.cantidad--;
    if (producto.cantidad <= 0) {
      carrito = carrito.filter((item) => item.id !== id);
    }
    guardarCarrito();
    actualizarContadorCarrito();
    renderizarCarrito();
  }
}

// Eliminar producto
function eliminarProducto(id) {
  carrito = carrito.filter((item) => item.id !== id);
  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
}

// Renderizar carrito
function renderizarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  const totalSpan = document.getElementById("carrito-total");

  if (!contenedor || !totalSpan) return;

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;

    const item = document.createElement("div");
    item.className = "cart-item";

    item.innerHTML = `
      <div class="cart-info">
        <h5 class="cart-product-name">${producto.nombre}</h5>
        <p class="cart-product-price">$ ${producto.precio.toLocaleString()}</p>
      </div>

      <div class="cart-controls">
        <button class="btn-qty" onclick="disminuirCantidad(${producto.id})">−</button>
        <span class="cart-qty">${producto.cantidad}</span>
        <button class="btn-qty" onclick="aumentarCantidad(${producto.id})">+</button>
      </div>

      <button class="btn-delete" onclick="eliminarProducto(${producto.id})">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    contenedor.appendChild(item);
  });

  totalSpan.textContent = total.toLocaleString();
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  renderizarCarrito();

  const btnVaciar = document.getElementById("vaciar-carrito");
  if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
  }
});
