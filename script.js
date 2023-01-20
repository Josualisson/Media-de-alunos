document.getElementById("calcular").addEventListener("click", () => {
var nome = document.getElementById("nome").value;

var nota1 = document.getElementById("nota1").value;
nota1 = Number(nota1);

var nota2 = document.getElementById("nota2").value;
nota2 = Number(nota2);

var nota3 = document.getElementById("nota3").value;
nota3 = Number(nota3);

var nota4 = document.getElementById("nota4").value;
nota4 = Number(nota4);

var media = document.getElementById("media").value;
media = Number(media);

var mediaNota = (nota1 + nota2 + nota3 + nota4) / 4
    
if(mediaNota >= media){
    resultado.innerHTML = "Olá " + nome + " Sua Média foi: " + mediaNota +" Você foi Aprovado! " 
    resultado.style.color = "green"
}else {
    resultado.innerHTML = "Olá " + nome + " Sua Média foi: " + mediaNota +" Você foi Reprovado! "
    resultado.style.color = "red"
}
})