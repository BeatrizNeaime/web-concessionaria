var campoFiltro = document.querySelector("#buscar")

campoFiltro.addEventListener("input", function(){
    if(this.value.length>0){
        var carros = document.querySelectorAll(".card")
        console.log(carros)
        for(var i=0; i<carros.length; i++){
            var carro = carros[i]
            var h5 = carro.querySelector(".card-title")
            var nome = h5.textContent
            var exp = new RegExp(this.value, "i")

            if(exp.test(nome)){
                carro.classList.remove("invisivel")
            } else{
                carro.classList.add("invisivel")
            }
        }
    } else{
        var carros = document.querySelectorAll(".card")
        for(var i = 0; i<carros.length;i++){
            var carro = carros[i]
            carro.classList.remove("invisivel")
        }
    }
})