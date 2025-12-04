let logo = document.getElementById("logo");
let menu = document.querySelector(".navbar");
let container = document.querySelector(".container");
let card = document.querySelector(".card-section");

gsap.from(menu,{
    y: -100,
    duration: 1,
})
gsap.from(logo,{
    color: "red",
    x: -100,
    duration: 1,
    delay: 0.5,    
})
gsap.from(card,{
    x: -1500,
    ease:"power3.out",
    duration: 2,
    delay: 0.5,   
})

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

