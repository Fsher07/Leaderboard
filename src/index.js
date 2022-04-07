import './style.css';
import scoreBoard from './scoreList.js';

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', scoreBoard.addScore);