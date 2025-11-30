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

// Función 2: mostrar los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles en Afrodita:");

    for (let i = 0; i < productos.length; i++) {
        console.log(
            `${i + 1}. ${productos[i].nombre} | Tipo: ${productos[i].tipo} | Precio: $${productos[i].precio}`
        );
    }

    console.log("-----------------------------------------------------");
}

// Función 3:  Seleccionar un producto
function seleccionarProducto() {
    console.log("Aquí se permitirá seleccionar un producto (lo haremos en el siguiente paso).");
}

// Invocación inicial

mostrarBienvenida()
mostrarProductos()

