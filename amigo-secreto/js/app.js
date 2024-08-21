let amigos = [];

function adicionar() {
    const amigo = document.getElementById('nome-amigo').value.trim();

    if (!amigo) {
        alert('Informe um nome de amigo');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Nome já adicionado');
        return;
    }

    amigos.push(amigo);
    atualizarListaAmigos();
    limparCampoNomeAmigo();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('lista-amigos');
    lista.innerText = amigos.join(', ');
}

function limparCampoNomeAmigo() {
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos quatro amigos');
        return;
    }

    embaralha(amigos);
    exibirSorteio();
}

function exibirSorteio() {
    const sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = amigos.map((amigo, i) => 
        `${amigo} ⥂ ${amigos[(i + 1) % amigos.length]}`
    ).join('<br>');
}

function embaralha(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
