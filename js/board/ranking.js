const rankingList = document.getElementById('ranking-list');

const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

ranking
  .sort((a, b) => b.pontos - a.pontos)
  .slice(0, 10)
  .forEach((jogador, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${jogador.nome} - ${jogador.pontos} pts`;
    rankingList.appendChild(item);
  });
