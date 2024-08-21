function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    //criando um array 
    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

    for (let i = 0; i < quantidade ; i++) {
        numero = obterNumeroAletorio(de,ate);
        
        //verificando que não existe numeros iguais 
        // com função includes e possivel verificar pois funciona como valor boleano  
        while (sorteados.includes(numero)) {
            numero = obterNumeroAletorio(de, ate);
        }
        sorteados.push(numero);
    }

    //para ordenar os valores 
    sorteados.sort((a, b) => a - b);
    
    //mostra informações na tela 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
   
    alterarStatusBotao();
}

function obterNumeroAletorio(min, max){
    //com a função floor e possivel arendodar os valores 
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora </label>`;
    alterarStatusBotao();


}