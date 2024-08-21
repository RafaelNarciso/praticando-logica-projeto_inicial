# Projeto: Carrinho de Compras
Este projeto é uma aplicação simples de carrinho de compras onde os usuários podem adicionar produtos, visualizar o total de suas compras e limpar o carrinho. A aplicação utiliza JavaScript para manipular o DOM e atualizar os valores em tempo real.

## Funcionalidades
- Adicionar Produtos:
  - Os usuários podem selecionar um produto e especificar a quantidade desejada. O total para o item é calculado e adicionado ao carrinho.
- Calcular Total:
  - O total geral das compras é atualizado dinamicamente conforme os produtos são adicionados ao carrinho.
- Limpar Carrinho:
  - Os usuários podem limpar o carrinho, removendo todos os itens e resetando o total geral.
## Estrutura do Código
 Função adicionar()
 
A função `adicionar()` é responsável por:

1. Recuperar o Produto Selecionado:
  - Obtém o nome e o valor unitário do produto selecionado.
2. Calcular o Preço Total:
    - Multiplica o valor unitário pela quantidade escolhida.
3. Atualizar o Carrinho:

    - Adiciona o produto e o total ao carrinho exibido na página.
    - Atualiza o total geral das compras.
4. Validar Entradas:

     - Verifica se o produto foi selecionado e se a quantidade é válida antes de adicionar ao carrinho.
