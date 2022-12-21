
//criar a matriz
var lista = [];
//é aqui que cria a matrizHTML e a variável semVirgulas
var matrizHTML = [];

var semVirgulas = '';
function enviar(){

    for(var i = 1; i < 6; i++){
        var nome1 = document.getElementById("nome"+i).value;
        lista.push(nome1);
    }

    for(var i = 0; i < 5; i++){
        var linha = '<h3> Nome: ' + lista[i] + '</h3>';
        matrizHTML.push(linha);
    }

    semVirgulas = matrizHTML.join(" ");

    document.getElementById("mostrarNomes").innerHTML = semVirgulas;


    document.getElementById("enviarBotao").style.display = "none";
    document.getElementById("organizarBotao").style.display = "inline-block";
    document.getElementById("mostrarNomes").style.display = "block";
  

}
var html = '';

function organizar(){
    //esconde a lista
    document.getElementById("mostrarNomes").style.display = "none";
    document.getElementById("mostrarNomesOrganizado").style.display = "block";
   
    //ordena todos os elementos da lista por ordem alfabética

    
    //limpa a matriz


    //repete os comandos 5 vezes

    //tira as vírgulas

    //exibe a matriz sem vírgulas

}

