function decimalHexadecimal(){
    let valorDecimal = Number(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    if(valorDecimal == ''){
        window.alert('Insira um valor para converter para hexadecimal.')
    } else{
       let hexa = valorDecimal.toString(16)
       result.textContent = hexa
    }
}
