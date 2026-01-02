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
        alert("Debes seleccionar una procedencia.")
        console.log(procedenciaDeposito)
        return;
    }else{
        if(procedenciaDeposito == 1){
            procedenciaDeposito = "Efectivo";
        }
        if(procedenciaDeposito == 2){
            procedenciaDeposito = "Transferencia Externa";
        }
        if(procedenciaDeposito == 3){
            procedenciaDeposito = "Caja Vecina";
        }
        if(procedenciaDeposito == 4){
            procedenciaDeposito = "Devolucion";
        }
    }
    if (monto == 0) {
        alert("Debe ingresar un monto primero");
        console.log(monto);
        return;
    }
    if (monto <= 100) {
        alert("El monto minimo debe ser: $100")
        console.log(monto);
        return;
    }
    
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

    localStorage.setItem('alkeWalletDB', JSON.stringify(parsero))

    alert("Deposito con exito. Monto Actualizado: " + parsero.saldo)
    location.reload();

});



