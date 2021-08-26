function decimalQuinario(){
    let valorDecimal = Number(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    if(valorDecimal == ''){
        window.alert('Insira um valor para converter para quinário.')
    } else{
       let quinario = valorDecimal.toString(5)
       result.textContent = quinario
    }
}
