
// Array que almacenará los productos del carrito
let cart = [];

// Función: agregar producto al carrito
function agregarAlCarrito(producto) {
  cart.push(producto);
  console.log("Producto agregado al carrito:", producto);
  console.log("Carrito actual:", cart);
}

// Función: obtener carrito
function obtenerCarrito() {
  return cart;
}
