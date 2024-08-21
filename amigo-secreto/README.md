# Projeto de Sorteio de Amigos

Este projeto é uma aplicação simples de sorteio de amigos, desenvolvido como parte das minhas práticas em lógica de programação com JavaScript. O objetivo é adicionar nomes de amigos, embaralhá-los e realizar o sorteio, onde cada amigo será associado a outro amigo.

## Funcionalidades

- **Adicionar Amigos:** Permite adicionar o nome de amigos à lista.
- **Verificar Nome Duplicado:** Garante que o mesmo nome não seja adicionado mais de uma vez.
- **Realizar Sorteio:** Embaralha a lista de amigos e sorteia pares de amigos.
- **Reiniciar Lista:** Limpa a lista de amigos e o resultado do sorteio para começar novamente.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Usar

1. **Adicionar um Amigo:**
   - Digite o nome do amigo no campo de entrada.
   - Clique no botão "Adicionar".
   - O nome será adicionado à lista, desde que não esteja vazio e não seja duplicado.

2. **Realizar o Sorteio:**
   - Após adicionar pelo menos 4 amigos, clique em "Sortear".
   - A lista de pares será exibida na tela.

3. **Reiniciar:**
   - Clique em "Reiniciar" para limpar a lista e começar novamente.

## Exemplo de Uso

```javascript
adicionar("Ana");
adicionar("Bruno");
adicionar("Carlos");
adicionar("Daniela");

