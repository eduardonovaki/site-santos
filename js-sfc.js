let navbar = document.getElementById("navbar");
const titulos = {
    libertadores: {
        nome: "Copa Libertadores da America",
        anos: [1962, 1963, 2011]
    },
    mundial: {
        nome: "Mundial de Clubes",
        anos: [1962, 1963]
    }
}
window.addEventListener('scroll', function(){
if (window.scrollY > 500) { 
  navbar.classList.add('scrolled')
} else {
  navbar.classList.remove('scrolled')
}
})
