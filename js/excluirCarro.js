const $botaoExcluir = document.querySelectorAll(".botaoExcluir")

$botaoExcluir.forEach($botaoExcluir => $botaoExcluir.addEventListener('click', function(){
    var evento = event.target
    var pai = evento.parentNode
    var avo = pai.parentNode
    var bisavo = avo.parentNode
    var trisavo = bisavo.parentNode
    var nsei = trisavo.parentNode
    var help = nsei.parentNode

    setTimeout(function () {
        help.classList.add("invisivel")
    }, 500)
}))
