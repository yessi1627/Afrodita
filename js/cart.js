
// Array que almacenará los productos al carro de compras
let cart = [];

// Función: agregar producto al carro de compras
function agregarAlCarrito(producto) {
  cart.push(producto);
  console.log("Producto agregado al carrito:", producto);
  console.log("Carrito actual:", cart);
}

// Función: obtener carro de compras
function obtenerCarrito() {
  return cart;
}
