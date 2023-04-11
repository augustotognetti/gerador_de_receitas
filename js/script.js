var ingredienteDigitado = new Array(3);

var ingredienteAleatorio = ["batata", "cenoura", "cebola", "frango", "repolho", "tomate", "azeitona",
"arroz", "feijão", "soja", "milho", "carne", "ovo", "porco", "alho", "beterraba", "peixe", "camarão", "queijo",
"pimenta vermelha", "gengibre", "páprica", "leite"];

function criarReceita(){
    ingredienteDigitado[0] = document.getElementById("ingrediente1").value;
    ingredienteDigitado[1] = document.getElementById("ingrediente2").value;
    ingredienteDigitado[2] = document.getElementById("ingrediente3").value;
    document.getElementById("textoIngredienteDigitado").innerHTML = ingredienteDigitado[0] + ", " +
    ingredienteDigitado[1] + " e " + ingredienteDigitado[2] + " mais ";
    document.getElementById("textoIngredienteAleatorio").innerHTML =
    ingredienteAleatorio[Math.floor(Math.random() * 23)] + ", " +
    ingredienteAleatorio[Math.floor(Math.random() * 23)] + " e " +
    ingredienteAleatorio[Math.floor(Math.random() * 23)];
}

function redefinirReceita(){
    document.getElementById("textoIngredienteDigitado").innerHTML = "";
    document.getElementById("textoIngredienteAleatorio").innerHTML = "";
}