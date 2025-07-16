let botonMenu = document.getElementById("enlace-menu");
let menu = document.getElementById("menu");


botonMenu.onclick = function(evento) {
    evento.preventDefault();
    evento.stopPropagation(); 
    menu.classList.toggle("menu-desplegado");
};


document.onclick = function() {
    menu.classList.remove("menu-desplegado");
};





nav();  /* COOKIES */

const popup = document.getElementById("cookiePopup");
const btn = document.getElementById("acceptCookies");

if (!localStorage.cookiesAccepted){
    popup.classList.add("show");
}

btn.addEventListener("click",function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
});


