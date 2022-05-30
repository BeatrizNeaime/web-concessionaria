var botaoExcluir = document.querySelector(".botaoExcluir")

botaoExcluir.addEventListener("click", function(){
    console.log("oi")
    var evento = event.target
    var pai = evento.parentNode
    var avo = pai.parentNode
    var bisavo = avo.parentNode
    var trisavo = bisavo.parentNode
    var nsei = trisavo.parentNode
    var help = nsei.parentNode
    help.classList.add("invisivel")
})