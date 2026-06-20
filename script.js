let total = 0;

function agregar(nombre, precio) {

    const lista = document.getElementById("lista");

    const item = document.createElement("li");

    item.innerHTML = nombre + " - $" + precio;

    lista.appendChild(item);

    total += precio;

    document.getElementById("total").innerHTML = total;
}


function vaciarCarrito() {

    document.getElementById("lista").innerHTML = "";

    total = 0;

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
