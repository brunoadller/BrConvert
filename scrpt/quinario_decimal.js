function quinarioDecimal(){
    
    let quinario = String(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    let dec = 0;
    let soma = 0;
    if(quinario == ''){
        window.alert('Insira um valor para converter para decimal.')
    } else{
        for(let i = quinario.length-1, j = 0; i>=0, j<quinario.length ; i--, j++){
            dec = Math.pow(5, i)
            soma = soma + dec* quinario[j]       
        }
        result.textContent = soma
    }
}
