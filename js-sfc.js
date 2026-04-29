let navbar = document.getElementById("navbar");
window.addEventListener('scroll', function(){
if (window.scrollY > 50) { // lembra de testar valores maiores depois
  navbar.classList.add('scrolled')
} else {
  navbar.classList.remove('scrolled')
}
})