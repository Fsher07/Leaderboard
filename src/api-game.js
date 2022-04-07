let gameID;

async function postGame() {
  const result = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: 'My cool new game'}),
  });
  console.log(result.json());
}

createGame().then((response) => {
  [gameID] = response.result.match(/(?<=ID: )[^ ]+/);
});

