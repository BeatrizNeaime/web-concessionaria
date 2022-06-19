// validação do ano usando jQuery

var div_ano = $(".div-ano")
var ano = $("#ano")
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
const val_max = 100000000
var floatt = parseFloat(valor.val())

valor.on("input", function () {
    if (valor.val().length > 0) {
        if (floatt <= 0 || floatt > val_max) {
            div_valor.removeClass('invisivel')
        } else {
            div_valor.addClass('invisivel')
        }
    } else {
        div_valor.addClass('invisivel')
    }
})


//Verificação de campos obrigatórios vazios

const ids = ['#marca', '#modelo', '#ano', '#valor', '#cor', '#floatingTextarea']
const divs = ['.div-marca', '.div-modelo', '.div-ano', '.div-valor', '.div-cor', '.div-desc']
var botao = $(".enviar")

botao.on("click", function () {
    for(let i = 0; i<divs.length; i++){
        if($(ids[i]).val().length < 1){
            console.log($(divs[i]))
            $(divs[i]).removeClass('invisivel')
        } else{
            $(divs[i]).addClass('invisivel')
        }
    }
})