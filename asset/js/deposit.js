let saldo = document.querySelector("#saldoActual");
let saldomobile = document.querySelector("#mobileMenuBalance");
let miDb = localStorage.getItem('alkeWalletDB');
let parsero = JSON.parse(miDb);
let btnDeposito = document.querySelector("#btn-deposito");

saldo.textContent = parsero.saldo.toLocaleString('es-CL');
saldomobile.textContent = parsero.saldo.toLocaleString('es-CL');

btnDeposito.addEventListener("click", function (e) {
    e.preventDefault();
    let inputDeposito = document.getElementById("input-deposito");
    let procedenciaDeposito = document.getElementById("procedencia").value
    let monto = Number(inputDeposito.value)



    if (!Number(procedenciaDeposito)) {
        Swal.fire({
            icon: "error",
            title: "Debes seleccionar una Procedencia",
            text: "Es necesario que seleecciones una procedencia del deposito (Legal)",
        });
        console.log(procedenciaDeposito)
        return;
    } else {
        if (procedenciaDeposito == 1) {
            procedenciaDeposito = "Efectivo";
        }
        if (procedenciaDeposito == 2) {
            procedenciaDeposito = "Transferencia Externa";
        }
        if (procedenciaDeposito == 3) {
            procedenciaDeposito = "Caja Vecina";
        }
        if (procedenciaDeposito == 4) {
            procedenciaDeposito = "Devolucion";
        }
    };

    if (monto == 0) {
        Swal.fire({
            icon: "error",
            title: "El Monto no puede ser 0",
            text: "Debes digitar un monto mayor a cero (tarado)",
        });
        console.log(monto);
        return;
    };
    if (monto <= 100) {
        Swal.fire({
            icon: "error",
            title: "El Monto debe ser mayor a $100",
            text: "Que vas a comprar con menos de $100? y la comision?",
        });
        console.log(monto);
        return;
    };



    parsero.saldo += Number(monto);
    console.log(parsero.saldo);
    let historia = Number(parsero.historial.length)
    parsero.historial.push({
        id: historia + 1,
        tipoTransaccion: "Deposito de Fondos",
        origen: procedenciaDeposito,
        fecha: new Date().toLocaleString("es-CL"),
        monto: Number(monto),
        estado: "Completado"
    })


    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu deposito ha sido confirmado. Felicitaciones!",
        showConfirmButton: false,
        timer: 1500
    });

    localStorage.setItem('alkeWalletDB', JSON.stringify(parsero));

    setTimeout(() => {
        location.reload();
    }, 1600);
});



