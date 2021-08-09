var c = document.getElementById("certificados")
var d = document.getElementById("contato")
c.addEventListener("mouseenter", entrar2)
c.addEventListener("mouseout", sair2)
d.addEventListener("mouseenter", entrar3)
d.addEventListener("mouseout", sair3)
function entrar2(){
    c.style.background = "White"
    c.style.color = "black"
}
function sair2(){
    c.style.background = "none"
    c.style.color = "White"
}
function entrar3(){
    d.style.background = "white"
    d.style.color = "black"
}
function sair3(){
    d.style.background = "none"
    d.style.color = "white"
}