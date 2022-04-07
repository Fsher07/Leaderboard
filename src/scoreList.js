export default class ScoreBoard {
  constructor(person, score) {
    this.person = person;
    this.score = score;
  }

  static scoreName = document.getElementById('name');

  static scoreValue = document.getElementById('score');

  static scores = [];

    static addScore = () => {
      const scoreBar = new ScoreBoard(ScoreBoard.scoreName.value, ScoreBoard.scoreValue.value);
      if (ScoreBoard.scoreName.value !== '' && ScoreBoard.scoreValue.value !== '') {
        ScoreBoard.scores.push(scoreBar);
        ScoreBoard.displayScores(scoreBar);
      }
    }

  static displayScores = (input) => {
    const scoreList = document.querySelector('.scoreList');
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'scoreListItem';
    scoreListItem.innerHTML = `${input.person} : ${input.score}`;
    scoreList.appendChild(scoreListItem);
  }
}