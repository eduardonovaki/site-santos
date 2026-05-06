let navbar = document.getElementById("navbar");
let botoes = document.querySelectorAll(".trofeu-btn");
let painel = document.getElementById('timeline-drawer')
const titulos = {
    libertadores: {
        nome: "Copa Libertadores da America",
        img: "./img/liberta2.png",
        conquistas: [
          {ano:1962, mvp: "Pelé"},
          {ano:1963, mvp: "Pelé"},
          {ano:2011, mvp: "Neymar Jr"},
        ]
    },
    mundial: {
        nome: "Mundial de Clubes",
        img: "./img/mundialpele.png",
        conquistas:  [
          {ano:1962, mvp: "Pelé"},
          {ano:1963, mvp: "Pelé"},
        ]
    },
    brasileirao: {
      nome: "Brasileirao",
      img: "./img/brasil2004.png",
      conquistas: [
        {ano:1961, mvp: "Pelé"},
        {ano:1962, mvp: "Pelé"},
        {ano:1963, mvp: "Pelé"},
        {ano:1964, mvp: "Pelé"},
        {ano:1965, mvp: "Pelé"},
        {ano:1968, mvp: "Pelé"},
        {ano:2002, mvp: "Robinho"},
        {ano:2004, mvp: "Diego Ribas"},
      ]
    },
    copa: {
      nome: "Copa do Brasil",
      img: "./img/copadobr.png",
      conquistas: [
        {ano:2010, mvp: "Neymar Jr"},
      ]
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

    let dados = titulos[chave];
    painel.style.display = 'block';

    let imagemPainel = document.getElementById("timeline-trofeu-img");
    imagemPainel.src = dados.img;
    let textoPainel = document.getElementById("timeline-drawer-title");
    textoPainel.textContent = dados.nome;
    let dadosPainel = document.getElementById("timeline-track");
    dadosPainel.innerHTML = " ";
    for (let conquistas of dados.conquistas){
      let item = document.createElement('div');
      item.innerHTML = `
      <span>${conquistas.ano}</span>
      <span>${conquistas.mvp}</span> `
      dadosPainel.appendChild(item);
    }
  })
}
    let botaoClose = document.getElementById("timeline-close");
    botaoClose.addEventListener('click', function(){
      painel.style.display = 'none';
    })
