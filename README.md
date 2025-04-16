# Projeto Games 1: Snake Game 

## Objetivo:
Desenvolver uma versão do Snake Game, o famoso Jogo da Cobrinha, utilizando HTML, CSS e Javascript, assim praticando conceitos de:

<ul>
  <li>Manipulação de DOM e elementos</li>
  <li>comunicação de eventos do teclado com uma interface</li>
  <li>Uso de LocalStorage para armazenar dados de uma sessão</li>
  <li>Lógica de Programação e Algoritmos</li>
  <li>Boas práticas de Github</li>
</ul>

## Tecnologias Utilizadas:

<ul>
  <li>HMTL: Interface do jogo e estrutura das telas</li>
  <li>CSS: Estilização e animação</li>
  <li>Javascript: Lógica do programa, colisões do personagem e placar</li>
  <li>LocalStorage: Armazenar informações (ranking)</li>
</ul>

## Funcionalidades do jogo:

<ul>
  <li>Movimento da cobra: Feito pelas setas do teclado ⬅ ⬆ ⬇ ⮕ </li>
  <li>Crescer: A cobra expande a cada comida ingerida</li>
  <li>Pontuação: Atualizada em tempo real para o jogador, armazenada no ranking caso o mesmo deseje ao final da jogada, tendo seu nome solicitado e guardado no LocalStorage</li>
  <li>Game Over: Ocorre quando ocorre colisão do personagem, no cenário ou em si mesmo</li>
  <li>Seleção de dificuldades: O jogador pode selecionar 3 níveis de dificuldade, sendo a mais baixa o padrão</li>
  <li>Ranckeamento: Ao armazenar sua pontuação, ela pode ser acessada pelo menu na aba Ranking em caso de ser uma das 10 melhores, sendo o TOP 3 com cores de medalhas</li>
  <li>Regras: Assim como o Rancking, também temos uma tela de instruções de como funciona o jogo</li>
</ul>


## Javascript

<ul>
  <li>app.js: responsável pelo loop do jogo, game over e integração geral dos módulos</li>
  <li>snakeBody.js: gerencia o corpo da cobra, colisões, crescimento e mudança de cor</li>
  <li>input.js: captura e trata a direção dos cliques das setas</li>
  <li>food.js: gera a comida, pontuação e gerencia a mudança de cor da cobra</li>
  <li>board.js: propriedades do tabuleiro (tamanho e gerar posições aleatórias)</li>
  <li>ranking.js: leitura e exibição do ranking, além do salvamento em LocalStorage</li>
</ul>


## Easter Egg

Ao comer uma comida, há uma chance de 20% que próxima seja uma pokebola. Ao ser comida, a cobra ficará roxa em homenagem ao Pokémon Arbok
A cor voltará ao normal ao comer de volta uma comida regular.
