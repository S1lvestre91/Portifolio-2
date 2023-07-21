const opemMenu = document.querySelector ("#menuB")
const menu = document.querySelector('.header-menu')

const imgMenu = document.getElementById("menuBur")

opemMenu.addEventListener("click",()=>{
   if(menu.style.opacity == 0){
     imgMenu.src = "img/menuclose.png"
    menu.style.opacity = 1;
   }
   else{
     imgMenu.src = "img/menuopem.png"
     menu.style.opacity = 0;
   }

})

