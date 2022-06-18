// validação do ano usando jQuery

var div_ano = $(".div-ano")
var ano = $("#info-ano")
const ano_atual = new Date().getFullYear()

ano.on("input", function () {
    if (ano.val().length > 0) {
        if (ano.val() < 1900 || ano.val() > ano_atual) {
            div_ano.removeClass('invisivel')
        } else {
            div_ano.addClass('invisivel')
        }
    } else {
        div_ano.addClass('invisivel')
    }
})

//validação e formatação do valor
var valor = $("#valor")
var div_valor = $(".div-valor")

valor.on("input", function() {
    if (valor.val().length > 0) {
        if (valor.val() <= 0 || valor.val() > (100 ** 6)) {
            div_valor.removeClass('invisivel')
        }
    } else {
        div_valor.addClass('invisivel')
    }
})

//Verificação de campos vazios

function validaMarca(){
    var input = $("#marca")
    var div_marca = $(".div-marca")
    if(input.val().length == 0 ){
        div_valor.removeClass('invisivel')
    } else{
        div_marca.addClass('invisivel')
    }
}

function validaModelo(){
    var input = $("#modelo")
    var div_modelo = $(".div-modelo")
    if(input.val().length == 0 ){
        div_valor.removeClass('invisivel')
    } else{
        div_modelo.addClass('invisivel')
    }
}

var botao = $(".enviar")

botao.on("click", function(){
    validaMarca()
    validaModelo()
})