function decimalBinario(){
    let valorDecimal = Number(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    if(valorDecimal == ''){
        window.alert('Insira um valor para converter para binário.')
    } else{
       let binario = valorDecimal.toString(2)
       result.textContent = binario
    }
}
