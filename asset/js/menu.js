let saldoActual = document.querySelector("#saldoActual")

function obtenerDatos (){
    const data = localStorage.getItem('alkeWalletDB');
    if(!data){
        const datosIniciales = {
            saldo: 35000,
            contactos: [
                {
                    id:1,
                    nombre: "Juan Perez", 
                    email: "juanp@gmail.com",
                    iniciales: "JP",
                    nucuenta: 456658875,
                    ticuenta: "Vista",
                    banco: "Banco Estado",
                    nutelefono: "956345687",
                },
                {
                    id:2,
                    nombre: "Maria Palacios", 
                    email: "mariap@gmail.com",
                    iniciales: "MP",
                    nucuenta: 658458987,
                    ticuenta: "Corriente",
                    banco: "Banco BCI",
                    nutelefono: "9865465",
                }
            ],
            historial: [
                {
                    id: 1,
                    tipoTransaccion: "Deposito Externo",
                    origen: "Banco Estado",
                    fecha: "28-10-2025 14:25",
                    monto: 15000,
                    estado: "Completado"
                   
                },
                {
                    id:2,
                    tipoTransaccion: "Transferencia Enviada",
                    origen: "Banco Chile",
                    fecha: "18-11-2024 10:45",
                    monto: 25000,
                    estado: "Completado"
                }
            ]
        };
        localStorage.setItem('alkeWalletDB',JSON.stringify(datosIniciales));
        return datosIniciales;
    }
    return JSON.parse(data)
};


let miDb = obtenerDatos();
saldoActual.textContent = "$"+miDb.saldo.toLocaleString('es-CL');
console.log(miDb.saldo)






