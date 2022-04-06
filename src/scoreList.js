import { indexOf } from "lodash";

export default class scoreBoard {
  constructor(person, score) {
    this.person = person;
    this.score = score;
  }
  static scoreName = document.getElementById('name');
  static scoreValue = document.getElementById('score');

  static scores = [];

   static addScore = () => {
    const scoreBar = new scoreBoard(scoreBoard.scoreName.value, scoreBoard.scoreValue.value);

    if(scoreBoard.name && scoreBoard.score !== null) {
    scoreBoard.scores.push(scoreBar);
    scoreBoard.person = "";
    scoreBoard.score = "";
    scoreBoard.displayScores(scoreBar);
    }
  }

  static displayScores = (input) => {
    const scoreList = document.querySelector('.scoreList');
    const scoreListItem = document.createElement("li");
    if (scoreBoard.scores.indexOf(input) % 2 === 0) {
      scoreListItem.style.backgroundColor = '#D3D3D3';
    } else {
      scoreListItem.style.backgroundColor = '#fff';
    }
    scoreListItem.innerHTML = `${input.person} : ${input.score}`;
    scoreList.appendChild(scoreListItem);
  }
}


