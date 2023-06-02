var numeroStr = document.getElementById('numero')
var mostrador = document.getElementById('mostrador')
function clickar(){
    var numeros = Number(numeroStr.value)
    mostrador.innerText = ''
    for(var c = 1;c <= 10;c++){
        var item = document.createElement('option')
        item.text = `${numeros} x ${c} = ${numeros*c}`
        mostrador.appendChild(item)
    }
}