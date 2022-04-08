import './style.css';
import { addScoreItem, getScoreItems } from './api-game.js';

const scoreName = document.getElementById('name');
const scoreValue = document.getElementById('score');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh-btn');

submitBtn.addEventListener('click', async () => {
  if (scoreName.value !== '' && scoreValue.value !== '') {
    await addScoreItem({
      user: scoreName.value,
      score: scoreValue.value,
    });
    scoreName.value = '';
    scoreValue.value = '';
  } else {
    const error = document.querySelector('.error');
    error.classList.toggle('active');
  }
});

refreshBtn.addEventListener('click', async () => {
  const scoreList = document.querySelector('.scoreList');
  scoreList.innerHTML = '';
  getScoreItems().then((response) => {
    response.result.forEach((score) => {
      const scoreListItem = document.createElement('tr');
      scoreListItem.className = 'scoreListItem';
      scoreListItem.innerHTML = `<td>${score.user}:</td>
        <td> ${score.score}</td>`;
      scoreList.appendChild(scoreListItem);
    });
  });
});