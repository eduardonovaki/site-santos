let navbar = document.getElementById("navbar");
let botoes = document.querySelectorAll(".trofeu-btn");
let painel = document.getElementById('timeline-drawer');
let scrollHint = document.querySelector('.hero-scroll-hint');
const titulos = {
    libertadores: {
        nome: "Copa Libertadores da America",
        img: "./img/liberta2.png",
        conquistas: [
          {ano:1962, mvp: "Melhor jogador: Pelé", rival:"Vice: Peñarol", placar:"Placar agregado: 5x4"},
          {ano:1963, mvp: "Melhor jogador: Pelé", rival:"Vice: Boca Juniors", placar:"Placar agregado: 5x3"},
          {ano:2011, mvp: "Melhor jogador: Neymar Jr", rival:"Vice: Peñarol", placar:"Placar agregado: 2x1"},
        ]
    },
    mundial: {
        nome: "Mundial de Clubes",
        img: "./img/mundialpele.png",
        conquistas:  [
          {ano:1962, mvp: "Melhor jogador: Pelé", rival:"Vice: Benfica", placar:"Placar agregado: 8x4"},
          {ano:1963, mvp: "Melhor jogador: Pelé", rival:"Vice: Milan", placar:"Placar agregado: 7x6"},
        ]
    },
    brasileirao: {
      nome: "Brasileirao",
      img: "./img/brasil2004.png",
      conquistas: [
        {ano:1961, mvp: "Melhor jogador: Pelé", rival:"Vice: Bahia", placar:"Placar agregado: 10x2"},
        {ano:1962, mvp: "Melhor jogador: Pelé", rival:"Vice: Botafogo", placar:"Placar agregado: 6x3"},
        {ano:1963, mvp: "Melhor jogador: Pelé", rival:"Vice: Bahia", placar:"Placar agregado: 8x0"},
        {ano:1964, mvp: "Melhor jogador: Pelé", rival:"Vice: Flamengo", placar:"Placar agregado: 4x1"},
        {ano:1965, mvp: "Melhor jogador: Pelé", rival:"Vice: Vasco da Gama", placar:"Placar agregado: 6x1"},
        {ano:1968, mvp: "Melhor jogador: Pelé", rival:"Vice: Vasco da Gama", placar:"Placar agregado: 2x0"},
        {ano:2002, mvp: "Melhor jogador: Robinho", rival:"Vice: Corinthians", placar:"Placar agregado: 5x2"},
        {ano:2004, mvp: "Melhor jogador: Diego", rival:"Vice: Athletico Paranaense", placar:"Santos 89 pontos"},
      ]
    },
    copa: {
      nome: "Copa do Brasil",
      img: "./img/copadobr.png",
      conquistas: [
      {ano:2010, mvp: "Melhor jogador: Neymar", rival:"Vice: Vitória", placar:"Placar agregado: 3x2"},
      ]
    }
}
window.addEventListener('scroll', function(){
if (window.scrollY > 500) { 
  navbar.classList.add('scrolled');
  scrollHint.style.display = 'none';
} else {
  navbar.classList.remove('scrolled');
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
      <span class="conquista-ano">${conquistas.ano}</span>
      <span class="conquista-mvp">${conquistas.mvp}</span> 
      <span class="conquista-rival">${conquistas.rival}</span>
      <span class="conquista-placar">${conquistas.placar}</span>`
      dadosPainel.appendChild(item);
      item.classList.add("conquista-itemjs");
      window.addEventListener('scroll', function(){
  if (window.scrollY > 500){
    painel.style.display = 'none'
  }
})
    }
  })
}
    let botaoClose = document.getElementById("timeline-close");
    botaoClose.addEventListener('click', function(){
      painel.style.display = 'none';
    })
