const elementosAni = document.querySelectorAll('[data-anima]')
const animacoes = "animacoes"

function animaScroll(){
  const topPage = window.pageYOffset +((window.innerHeight*3)/4)
  
  elementosAni.forEach(function(elemento){
    if(topPage > elemento.offsetTop){
      elemento.classList.add(animacoes)
    }
    else{
      elemento.classList.remove(animacoes)
    }
  })
}
if(elementosAni.length){
  window.addEventListener("scroll", function(){
    animaScroll();
  })
}