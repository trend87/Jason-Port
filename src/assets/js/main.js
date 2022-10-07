const hamBurger = document.querySelector("#hamBurger")
const menu = document.querySelector("#menu")

hamBurger.addEventListener("click", function (){
    if (menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
       
    }else{
        menu.classList.add("hidden")
    }
})