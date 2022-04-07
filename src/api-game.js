let gameID;

async function postGame() {
  const result = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: 'My cool new game'}),
  });
  return result.json();
}

createGame().then((response) => {
  [gameID] = response.result.match(/(?<=ID: )[^ ]+/);
});

async function addScoreItem (input) {
  const scoreItem = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  return scoreItem.json();
}



