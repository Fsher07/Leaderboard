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
      const scoreListItem = document.createElement('li');
      scoreListItem.className = 'scoreListItem';
      scoreListItem.innerHTML = `${score.user} : ${score.score}`;
      scoreList.appendChild(scoreListItem);
    });
  });
});