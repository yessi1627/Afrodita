function renderizarProductos() {
const contenedor = document.getElementById("productos-container");
 if (!contenedor) return;
 contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const col = document.createElement("div");
     col.className = "col-md-4";

    col.innerHTML = `
    <div class="card h-100 shadow-sm">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
     <div class="card-body text-center">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text fw-bold">$ ${producto.precio.toLocaleString()}</p>
        <button class="btn btn-outline-dark btn-afrodita btn-agregar">
        Agregar al carrito
        </button>
     </div>
    </div>
 `;

    contenedor.appendChild(col);
    const boton = col.querySelector(".btn-agregar");

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });
 });
}
