
var titulo = document.querySelector(".titulo");//É uma boa prática também informar ao querySelector uma classe ou outra atribuição senão a tag, pois se mudar a tag ele vai estar pegando da classe. O query Selector serve para pegar apenas um pedaço do nosso HTML e trazer para o mundo Javascript-->

titulo.textContent = "Aparecida Nutricionista";//mudar o conteudo de texto no javascript;-->

//o document é a Ela é a representação do DOM ou Document Object Model, que é a representação da nossa página HTML para o navegador, que é utilizada pelo Javascript para manipular a página.
//O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhvalido = validaAltura(altura);

    if (!pesoEhValido) { // O operador lógico "ou" pode ser escrita || assim;
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");//Para adicionar uma nova classe ao termo escolhido
    }

    if (altura < 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhvalido = false;
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhvalido) {
        var imc = calculaImc(peso,altura);

        tdImc.textContent = imc;
    }

    function validaPeso(peso) {
        if(peso >= 0 && peso < 1000) {
            return true;
        }else{
            return false;
        }
    }

    function validaAltura(altura) {
        if(altura >= 0 && altura <= 3.0) {
            return true;
        }else{
            return false;
        }
    }

    function calculaImc(peso,altura) {
        var imc = 0;

        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
}
    //O comportamento padrão de um form, quando clicamos em um button ou em um input submit, que está dentro dele, é enviar os dados e recarregar a página
    //Para evitarmos este comportamento, devemos chamar a função do Javascript que previne o comportamento padrão de certos elementos: event.preventDefault.
