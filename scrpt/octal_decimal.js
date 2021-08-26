function octalDecimal(){
    
    let octal= String(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    let dec = 0;
    let soma = 0;
    if(octal == ''){
        window.alert('Insira um valor para converter para decimal.')
    } else{
        for(let i = octal.length-1, j = 0; i>=0, j<octal.length ; i--, j++){
            dec = Math.pow(8, i)
            soma = soma + dec* octal[j]       
        }
        result.textContent = soma
    }
}
