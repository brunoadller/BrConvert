function binarioDecimal(){
    
    let bin = String(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    let dec = 0;
    let soma = 0;
    if(bin == ''){
        window.alert('Insira um valor para converter para decimal.')
    } else{
        for(let i = bin.length-1, j = 0; i>=0, j<bin.length ; i--, j++){
            dec = Math.pow(2, i)
            soma = soma + dec* bin[j]       
        }
        result.textContent = soma
    }
}
