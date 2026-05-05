let navbar = document.getElementById("navbar");
let botoes = document.querySelectorAll(".trofeu-btn");
let painel = document.getElementById('timeline-drawer')
const titulos = {
    libertadores: {
        nome: "Copa Libertadores da America",
        img: "./img/liberta2.png",
        anos: [1962, 1963, 2011]
    },
    mundial: {
        nome: "Mundial de Clubes",
        img: "./img/mundialpele.png",
        anos: [1962, 1963]
    },
    brasileirao: {
      nome: "Brasileirao",
      img: "./img/brasil2004.png",
      anos: [1961, 1962, 1963, 1964, 1965, 1968, 2002, 2004]
    },
    copa: {
      nome: "Copa do Brasil",
      img: "./img/copadobr.png",
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
    let dados = titulos[chave];
      console.log(dados);
    painel.style.display = 'block';
    let imagemPainel = document.getElementById("timeline-trofeu-img");
    imagemPainel.src = dados.img;
    let textoPainel = document.getElementById("timeline-drawer-title");
    textoPainel.textContent = dados.nome;
    let botaoClose = document.getElementById("timeline-close");
    botaoClose.addEventListener('click', function(){
      painel.style.display = 'none';
    })
  })
}
