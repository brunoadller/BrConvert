function decimalOctal(){
    let valorDecimal = Number(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    if(valorDecimal == ''){
        window.alert('Insira um valor para converter para Octal.')
    } else{
       let octal = valorDecimal.toString(8)
       result.textContent = octal
    }
}

