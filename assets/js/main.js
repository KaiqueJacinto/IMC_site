const form = document.querySelector('#formulario-imc');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const pesoRecebido = e.target.querySelector('.peso');
    const alturaRecebido = e.target.querySelector('.altura');
    const valorPeso = (pesoRecebido.value).replace(',','.')
    const valorAltura = (alturaRecebido.value).replace(',','.')
    
    if (!(isNaN(parseFloat(valorPeso)))){
        if(!(isNaN(parseFloat(valorAltura)))){
            resultadoDoCalculoIMC = calcula_imc(valorPeso,valorAltura)
            if (!isNaN(resultadoDoCalculoIMC)){
                imprimiResultado(`Seu imc é ${resultadoDoCalculoIMC} - [${caracteristicaImc(resultadoDoCalculoIMC)}]`)
            }
            else{
                imprimiResultado('Numero inválido')
            }
        }else{
            imprimiResultado('Numero inválido')
        }
    }else{
        imprimiResultado('Numero inválido')
    }
});

function calcula_imc(peso,altura){
    return (peso/(altura**2)).toFixed(2)
}
function caracteristicaImc(valorImc){
    if (valorImc <= 18.5){
        return 'abaixo do peso'
    }else if(valorImc <= 24.9){
        return 'peso normal'
    }else if (valorImc<=29.9){
        return 'sobrepeso'
    }else if(valorImc<=34.9){
        return 'obesidade grau 1'
    }else if (valorImc<=39.9){
        return 'obesidade grau 2'
    }else{
        return 'obesidade grau 3'
    }
}
function imprimiResultado(msg){
    if (msg === 'Numero inválido'){
        document.querySelector('#resultado-calculo').innerHTML= '<h2 class="valorIMCCalculado" style="background: red">'+msg+'</h2>';
    }else{
        document.querySelector('#resultado-calculo').innerHTML= '<h2 class="valorIMCCalculado" style="background: yellow">'+msg+'</h2>';
    }
}