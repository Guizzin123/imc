// Declaração da variável global
var resultado = 0;

// Função para exibir o resultado na tela
function exibirResultado() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = resultado+"Imc" ;
}

// Função para realizar o cálculo
function calcular() {
  // Lê os valores dos inputs
  var a = Number(document.getElementById("input1").value);
  var b = Number(document.getElementById("input2").value);

  // Realiza a conta
  resultado = a / (b * b);

  // Exibe o resultado na tela
  exibirResultado();
}

// Exibe o resultado na tela quando a página for carregada
window.onload = function() {
  exibirResultado();
};
