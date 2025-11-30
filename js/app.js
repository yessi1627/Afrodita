// Array de los productos
const productos = [
    { nombre: "Shampoo Reparador DivineCurl", tipo: "capilar", precio: 38000 },
    { nombre: "Mascarilla Hidratante GoldenSkin", tipo: "piel", precio: 45000 },
    { nombre: "Aceite Capilar Lovex", tipo: "capilar", precio: 52000 },
    {nombre: "Repolarizador trigo de la mañana", tipo: "capilar", precio:87000}
];


// Función 1: mostrar mensaje de bienvenida
function mostrarBienvenida() {
    alert(" Bienvenida a Afrodita \n Tu belleza merece lo mejor.");
}

// Función 2: mostrar los productos disponiblres
function mostrarProductos() {
    console.clear();
    console.log("Listado de productos disponibles:");
    console.log("-----------------------------------------------------");

    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = "";

    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);

        const item = document.createElement("p");
        item.textContent = `${index + 1}. ${producto.nombre} - $${producto.precio}`;
        contenedor.appendChild(item);
    });
}

// Función 3:  Seleccionar un producto
function seleccionarProducto() {
        let opcion = prompt(
        "Ingresa el número del producto que deseas  comprar:"
    );
    opcion = Number(opcion);
    if (isNaN(opcion)) {
        alert("Debes ingresar un número válido.");
        return;
    }

    if (opcion < 1 || opcion > productos.length) {
        alert("No existe un producto con ese número.");
        return;
    }
    // Obtener producto seleccionado
    const productoElegido = productos[opcion - 1];

    alert(
        "Elegiste: " +
        productoElegido.nombre +
        "\nEl valor es de: $" +
        productoElegido.precio
    );
    console.log("Producto seleccionado para tu compra:", productoElegido);
}

// Invocación inicial

mostrarBienvenida()
mostrarProductos()
seleccionarProducto()

