let cart = JSON.parse(localStorage.getItem("carritoAfrodita")) || [];

// Función para guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carritoAfrodita", JSON.stringify(cart));
}

// Función para  agregar el producto al carrito
function agregarAlCarrito(producto) {
  cart.push(producto);
  guardarCarrito();

  console.log("Producto agregado al carrito:", producto);
  console.log("Carrito actual:", cart);
}

// Función de enlistar los productos agregados a el carrito
function obtenerCarrito() {
  return cart;
}
