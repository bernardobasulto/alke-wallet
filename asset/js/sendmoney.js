let saldo = document.querySelector("#saldoActual");
let miDb = localStorage.getItem('alkeWalletDB');
let parsero = JSON.parse(miDb);

let contenedor = document.getElementById('listaContactos');
contenedor.innerHTML = "";
saldo.textContent = parsero.saldo.toLocaleString('es-CL')
let contactoSeleccionado = null;
let contactoListado = parsero.contactos
let contadot = 1;
contactoListado.forEach(contacto => {
    let nombreHtml = contacto.nombre;
    let inicialesHtml = contacto.iniciales;
    let correoHtml = contacto.email;
    let bancoHtml = contacto.banco;
    let ticuentaHtml = contacto.ticuenta;
    let nutelefonoHtml = contacto.nutelefono;

    contenedor.innerHTML += `
                            
                                <a href="#" id="contactoLista${contadot}" class="list-group-item list-group-item-action contact-item d-flex align-items-center">
                                    <div class="contact-avatar me-3">${inicialesHtml}</div>
                                    <div class="flex-grow-1">
                                        <strong>${nombreHtml}</strong>
                                        <small class="text-muted d-block">${correoHtml}</small>
                                    </div>
                                    <div class="flex-grow-1">
                                    ${bancoHtml}
                                    
                                    </div>
                                    <div class="flex-grow-1">${ticuentaHtml}
                                    <small class="text-muted d-block">Tipo Cuenta</small></div>
                                    
                                    
                                </a>                                            
    
    `
    contadot++;

});
/*
    indico el total de contactos
*/
let totalContactos = document.querySelector("#totalContactos")
totalContactos.textContent = "Listado de contactos (" + (contadot - 1) + ")";

/*Agregar contacto modal*/
let formulario = document.querySelector("#addContactForm");
let idNuevo = parsero.contactos.length
console.log(idNuevo)
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let dbActualizada = JSON.parse(localStorage.getItem('alkeWalletDB'));
    const nuevoContacto = {
        id: idNuevo + 1,
        nombre: document.getElementById("newContactName").value,
        email: document.getElementById("newContactEmail").value,
        iniciales: document.getElementById("newIniciales").value,
        nucuenta: document.getElementById("newCuentaCorriente").value,
        ticuenta: document.getElementById("newTipoCuenta").value,
        banco: document.getElementById("newNombreBanco").value,
        nutelefono: document.getElementById("newContactPhone").value,

    }

    parsero.contactos.push(nuevoContacto);
    localStorage.setItem('alkeWalletDB', JSON.stringify(parsero));

    const modalElement = document.getElementById('addUserModal');
    bootstrap.Modal.getInstance(modalElement).hide();

    // ESTO RECARGA LA PÁGINA PARA ACTUALIZAR LA LISTA
    location.reload();
})

let contenedor2 = document.getElementById('listaContactos');
contenedor2.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    e.preventDefault();

    const nombre = link.querySelector("strong")?.textContent.trim();
    const correo = link.querySelector("small")?.textContent.trim();
    const banco = link.children[2]?.textContent.trim();
    const cuenta = link.children[3]?.childNodes[0]?.textContent.trim();

    // pintar UI
    document.getElementById("nombrePersonaSelect").textContent = nombre;
    document.getElementById("emailPersonaSelect").textContent = correo;
    document.getElementById("bancoPersonaSelect").textContent = banco;
    document.getElementById("cuentaPersonaSelect").textContent = cuenta;
    
    // ✅ SOLO TEXTO
    contactoSeleccionado = {
        nombre: String(nombre),
        correo: String(correo),
        banco: String(banco),
        cuenta: String(cuenta)
    };

    console.log("Contacto seleccionado:", contactoSeleccionado);
});

let historia = Number(parsero.historial.length)
console.log(historia)

let formEnviar = document.getElementById('transferir');

formEnviar.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!contactoSeleccionado) {
        alert("Debes seleccionar un contacto primero");
        return;
    }

    const inputMonto = formEnviar.querySelector("input");
    const monto = Number(inputMonto.value);

    if (!monto || monto <= 0) {
        alert("Ingresa un monto válido");
        return;
    }

    let db = JSON.parse(localStorage.getItem("alkeWalletDB"));

    if (monto > db.saldo) {
        alert("Saldo insuficiente");
        return;
    }

    // 🔻 descontar saldo
    db.saldo -= monto;

    // 🧾 agregar historial
    if (!db.historial) db.historial = [];

    db.historial.push({
        id: historia + 1,
        tipoTransaccion: "Transferencia desde la Aplicacio",
        origen: "Cuenta Propia",
        fecha: new Date().toLocaleString("es-CL"),
        monto: (monto*-1),
        estado: "Completado",
        bancoDestino: contactoSeleccionado.banco,
        destinodestinatario: contactoSeleccionado.nombre,
        cuenta: contactoSeleccionado.cuenta
        
    });
    console.log(db);
    localStorage.setItem("alkeWalletDB", JSON.stringify(db));

    // actualizar saldo visual
    document.getElementById("saldoActual").textContent =
        db.saldo.toLocaleString("es-CL");

    alert(`Transferencia realizada con éxito a ${contactoSeleccionado.nombre}`);

    inputMonto.value = "";
});
