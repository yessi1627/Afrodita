// Array vacio
const productos = [
    { nombre: "Shampoo Reparador DivineCurl", tipo: "capilar", precio: 38000 },
    { nombre: "Mascarilla Hidratante GoldenSkin", tipo: "piel", precio: 45000 },
    { nombre: "Aceite Capilar Lovex", tipo: "capilar", precio: 52000 },
    {nombre: "Repolarizador trigo de la mañana", tipo: "capilar", precio:87000}
];

// Función 1: mostrar mensaje de bienvenida
function mostrarBienvenida() {
    alert(" Bienvenida a Afrodita \nTu belleza merece lo mejor.\nVamos a ver de que te antojas hoy.");
}

// Función 2: mostrar los productos disponibles
function mostrarProductos() {
    console.log(" Lista de productos disponibles (pronto se llenará)...");
}

// Función 3:  Seleccionar un producto
function seleccionarProducto() {
    console.log("Aquí se permitirá seleccionar un producto (lo haremos en el siguiente paso).");
}

// Invocación inicial
mostrarBienvenida();
