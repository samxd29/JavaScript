nome.substr(0, this.value.length); // Número inicial até o cumprimento da string;

var comparavel = nome.substr(0, this.value.length);
if (!(this.value == comparavel)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}