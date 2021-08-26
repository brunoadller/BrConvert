function hexaDecimal(){
    
    let hexa = String(document.getElementById('numero').value)
    let result = document.getElementById('resultado')
    let dec = 0;
    let soma = 0;
    
    if(hexa == ''){
        window.alert('Insira um valor para converter para decimal.')
    } else{
       result.textContent = parseInt(hexa, 16)
        
    }
}
