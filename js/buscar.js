var buscar = document.querySelector("#buscar-pacientes");
buscar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest(); // Objeto do Javascript que faz requisições Http;

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")  // Open exclusivo para abrir a conexão com o endereço que queremos fazer;
    // Para configurar a requisição que vc vai enviar;

    xhr.addEventListener("load", function () { // Ouvir na hora que retornar a resposta para a requisição enviada;
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // Transformar uma string em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript.

            pacientes.forEach(function (paciente) { // Peguei o pacientes passei o tamanho do array e coloquei a função adicionar eles na tabela;
                adicionarPacienteNaTabela(paciente);
            })
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })
    // Modo Ajaz fazer uma requisição de Mmodo Assíncrono, ele não está parando o fluxo do Js ou seja, ele não trava o Js para fazer a busca e trazer de volta;

    xhr.send(); // Enviar a requisição para o navegador;

});

//Os dados possuem uma estrutura parecida com o objeto do JavaScript porque eles estão no formato JSON 
//(sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que 
//podemos transportar pela web.

//A semelhança é tanta que podemos facilmente converter JSON (o texto da resposta da requisição) em objetos 
//do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma string.
// Queremos que ele seja transformado em um array de objetos, mais útil para o JS.