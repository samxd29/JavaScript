var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){//Escutador de digitação;
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = RegExp(this.value, "i"); //Expressões Regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo for maior. Tem o case sensitive que diferencia o Maiúsculo do Minúsculo e o insensitiive que não diferencia.
            if (!expressao.test(nome)) { // Testar se no meu nome vai ter um pedacinho do que tem na minha expressão
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for( var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})   

//Podemos utilizar a função substring, que recebe dois parâmetros, fazendo com que ela devolva parte da string,
//com o tamanho definido nos parâmetros. O primeiro parâmetro é o início, começando do 0 (que representa o 
//primeiro caractere). O segundo parâmetro define o fim (exclusivo, mostramos até o penúltimo caractere). 
//Por exemplo:

//var string = "Alura";
//var resultado = string.substring(1, 4);

//Extraímos uma string que começa no segundo caractere (número 1) e termina no quarto caractere (número 3,
// índice anterior ao número 4). O valor da variável resultado é:

//lur
