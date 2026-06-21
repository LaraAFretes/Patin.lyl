let total = 0;
let cantidad = 0;

function agregar(nombre, precio) {

    const lista = document.getElementById("lista");

    const item = document.createElement("li");

    item.innerHTML = nombre + " - $" + precio;

    lista.appendChild(item);

    total += precio;

    cantidad++;

    document.getElementById("contador").innerHTML = cantidad;

    document.getElementById("total").innerHTML = total;
}


function vaciarCarrito() {

    document.getElementById("lista").innerHTML = "";

    total = 0;

    cantidad = 0;

    document.getElementById("contador").innerHTML = cantidad;

    document.getElementById("total").innerHTML = total;

}


function finalizarCompra() {

    let productos = "";

    let items = document.querySelectorAll("#lista li");

    items.forEach(item => {
        productos += "- " + item.innerText + "%0A";
    });

    if (productos === "") {

        alert("El carrito está vacío");

        return;

    }

    let mensaje = "Hola! Quiero realizar el siguiente pedido:%0A%0A" +
                  productos +
                  "%0ATotal: $" + total;

    window.open(
        "https://wa.me/5493624164193?text=" + mensaje,
        "_blank"
    );

}



function mostrarCarrito() {

    document.getElementById("panelCarrito").classList.toggle("abierto");

}
function cerrarCarrito() {

    document.getElementById("panelCarrito").classList.remove("abierto");

}

function filtrarProductos() {

    let categoria = document.getElementById("filtro").value;

    let productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto) {

        if (categoria == "todos" ||
            producto.dataset.categoria == categoria) {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });

}

