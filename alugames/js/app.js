

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);

    if (!gameClicado) {
        console.error(`Elemento com ID game-${id} não foi encontrado.`);
        return;
    }

    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (!imagem) {
        console.error('Elemento com a classe .dashboard__item__img não foi encontrado.');
        return;
    }

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = "Alugar";
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = "Devolver";
        botao.classList.add('dashboard__item__button--return');
    }
}
