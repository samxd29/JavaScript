var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {// Função adicionar um evento escutar, toda vez que clicar ;
    event.preventDefault();//previne do comportamento padrão que é recarregar a página;

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente form
    var paciente = obtemPacienteDoFormulario(form);
    //Cria a tr e a td do paciente
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagemDeErro(erros);

        return;
    }
    
    adicionarPacienteNaTabela(paciente);
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function adicionarPacienteNaTabela (paciente){
    var pacienteTr = montaTr(paciente);
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // Falei pra tabela colocar dentro dela a tag paciente que criamos;
    //appendChild é o mesmo que colocar como filho direto.
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //O inner é para controlar o Html, nesse caso limpar; Inner é uma propriedade.
    erros.forEach(function(erros) { // ForEach não precisa declarar o array, para cada item do meu array faço alguma coisa;
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = { // Objeto representam coisas do mundo real e da programação. Esse objetos tem suas caracteristicas e propriedades.
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}    

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); // Adicionando classe no paciente pra ficar igual as classes das tabelas.

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));// appenchild coloca como filho direto, ou seja coloquei como filho direto do paciente que criei os tds;
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0 ) {
        erros.push("O nome não pode ficar em branco. Por favor insira um nome.");
    }

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido"); // o push vai colocar informação no array
    
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if(paciente.gordura.length == 0 ) {
        erros.push("A gordura do paciente não pode ser em branco");
    }
   
    return erros;
}