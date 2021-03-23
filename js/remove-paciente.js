var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");
  
  setTimeout(function(){ // setTimeout vai fazer o js esperar um tempinho executar a outra função. 
    event.target.parentNode.remove();
  }, 500);
})

//var alvoEvento = event.target;
//var paiDoAlvo = alvoEvento.parentNode; // Alvo do duplo click é a tabela, mas o evento de tem que remover o pai do alvo ou seja, o TR.

//paiDoAlvo.remove();


//tabela.addEventListener("dblclick",function(event){ 
//  event.target.remove(); // o target vai ser o elemento alvo do click, diferente do this que é o dono do evento
//})

//pacientes.forEach(function (paciente){
  //  paciente.addEventListener("dblclick", function(){ // adicionar um escutador de dois clicks no paciente;
    //    console.log("Fui clicado com duplo click");
      //  this.remove(); // o this é uma palavra de contexto que está atrelado a quem acionou, ao dono do evento.
    //});
//});
