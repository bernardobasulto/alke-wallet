let formLogin = document.querySelector("#formLogin");
let emailLogin = document.querySelector("#mailLogin");
let passwordLogin = document.querySelector("#pasLogin");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = emailLogin.value;
    let password = passwordLogin.value;

    if(email === "prueba@alkawallet.com" && password === "123456"){
         Swal.fire({
            position: "center",  
            icon: "success",
            title: "Usuario logueado con éxito",
            showConfirmButton: false,
            timer: 1500,
            toast: true,  
            timerProgressBar: true,  // Opcional: muestra barra de progreso
            customClass: {
                popup: 'custom-swal-popup'  // Clase CSS personalizada opcional
            }
        });
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 2000);
    }else{
        Swal.fire({
            position: "center",  
            icon: "error",
            title: "Datos Incorrectos",
            showConfirmButton: false,
            timer: 1500,
            toast: true,  
            timerProgressBar: true  // Opcional: muestra barra de progreso
        });
        formLogin.reset();  // Corregí el nombre (era formSesion)
    }
});