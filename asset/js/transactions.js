let saldoActual = document.getElementById("saldoActual");
let saldoActualMobile = document.getElementById("mobileMenuBalance");
let miDB = localStorage.getItem('alkeWalletDB');
let parsero = JSON.parse(miDB);
saldoActual.textContent = "$" + parsero.saldo.toLocaleString('es-CL')
const data = parsero.historial;

const table = new Tabulator("#tabla-movimientos", {
    data: data,
    theme: "midnight",
    layout: "fitColumns",
    responsiveLayout: "hide",
    height: "400px",
    rowHeight: 38,
    pagination: "local",       // Paginación en el cliente
    paginationSize: 6,         // 6 filas por página
    paginationSizeSelector: [6, 12, 24], // Selector para que el usuario cambie el tamaño
    paginationCounter: "rows", // Muestra "Mostrando 1-6 de 20 filas"

    columns: [
        { title: "ID", field: "id", width: 64 },
        { title: "Tipo", field: "tipoTransaccion" },
        { title: "Origen", field: "origen",responsiva: 2 },
        { title: "Destino", field: "destino", responsiva:2},
        { title: "Cuenta", field: "cuenta", width: 94,responsiva:1 },
        { title: "Fecha", field: "fecha" },
        { title: "Monto", field: "monto", responsiva: 0,
            hozAlign: "right",
            formatter: "money",
            formatterParams: {
                symbol: "$",
                thousand: ".",
                precision: 0
            }
        },
        { title: "Estado",field: "estado",}
    ]
});

