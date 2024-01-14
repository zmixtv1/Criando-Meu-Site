var b = document.getElementById("gmail")
var c = document.getElementById("certificados")
var d = document.getElementById("contato")
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

//  calculo da idade

let dataNascimento = new Date('2002-03-24');  // Criar um objeto Date com a data de nascimento
let dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;  // Adicionando 1, pois os meses em JavaScript são indexados de 0 a 11
let diaAtual = dataAtual.getDate();

let anoNascimento = dataNascimento.getFullYear();
let mesNascimento = dataNascimento.getMonth() + 1;  // Adicionando 1, pois os meses em JavaScript são indexados de 0 a 11
let diaNascimento = dataNascimento.getDate();

let idadeAtual = anoAtual - anoNascimento;

// Verificar se a data de nascimento já ocorreu este ano
if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idadeAtual--;
}

let descricao = document.getElementById("descricao");
descricao.innerHTML = `Brasileiro, Solteiro, ${idadeAtual} anos`;
