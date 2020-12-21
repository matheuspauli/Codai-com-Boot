var nome = "Matheus de Pauli";
var nomeHtml = document.getElementById("nome-no-html");
var cargo = "Estudante Growdev";
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo
}

function clickNoProjetos(){
    console.log("Clicou no botão Projetos");
    texto2.style.display = "block";
    texto1.style.display ="none";
}

function clickNoSobre(){
    console.log("Clicou no botão Sobre");
    texto1.style.display ="block";
    texto2.style.display="none";

}
colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);



