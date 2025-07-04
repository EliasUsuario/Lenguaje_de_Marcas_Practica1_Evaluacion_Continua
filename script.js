let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";


function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu);

    lanz.addEventListener("click", function(e) {
    e.preventDefault(); 
    e.stopPropagation();
    })

}



function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);

}


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


