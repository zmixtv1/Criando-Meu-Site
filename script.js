var a = document.getElementById("numero")
var b = document.getElementById("gmail")
var c = document.getElementById("certificados")
var d = document.getElementById("contato")
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)
b.addEventListener("mouseenter", entrar1)
b.addEventListener("mouseout", sair1)
c.addEventListener("mouseenter", entrar2)
c.addEventListener("mouseout", sair2)
d.addEventListener("mouseenter", entrar3)
d.addEventListener("mouseout", sair3)


function entrar(){
    a.style.color = "Blue"
}
function sair(){
    a.style.color = "white"
}
function entrar1(){
    b.style.color = "Blue"
}
function sair1(){
    b.style.color = "white"
}

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