let navbar = document.getElementById("navbar");
let botoes = document.querySelectorAll(".trofeu-btn");
const titulos = {
    libertadores: {
        nome: "Copa Libertadores da America",
        anos: [1962, 1963, 2011]
    },
    mundial: {
        nome: "Mundial de Clubes",
        anos: [1962, 1963]
    },
    brasileirao: {
      nome: "Brasileirao",
      anos: [1961, 1962, 1963, 1964, 1965, 1968, 2002, 2004]
    },
    copa: {
      nome: "Copa do Brasil",
      anos: [2010]
    }
}
window.addEventListener('scroll', function(){
if (window.scrollY > 500) { 
  navbar.classList.add('scrolled')
} else {
  navbar.classList.remove('scrolled')
}
})

for (let botao of botoes) {
  botao.addEventListener('click', function(){
    let chave = botao.dataset.key;
      console.log(chave);
  })
}
