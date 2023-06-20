const start_button = document.querySelector('.start-button');
const url_id = window.location.pathname.slice(6);
const new_game = document.querySelector('.new-game');

async function init_function() {
  printPlayers(await getPlayers());
}

new_game.onclick = function () {
  location.href = '/';
};

start_button.onclick = async function (e) {
  start_button.style.visibility = 'hidden';
  start_button.style.display = 'none';
  e.preventDefault();

  // * envía la instrucción al backend para que asigne la apuesta y seleccione el ganador del juego.
  await setFullGame();

  await printPlayersBet();
  new_game.style.visibility = 'visible';
};

async function setFullGame() {
  await fetch('/api/game/saveBet', {
    method: 'POST',
    body: JSON.stringify({ gameId: url_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error: ', error));

  await fetch('/api/game/setWinner', {
    method: 'POST',
    body: JSON.stringify({ id: url_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error: ', error));
}

async function getPlayers() {
  let players;

  await fetch(`/gamers/${url_id}`)
    .then((res) => res.json())
    .then((res) => {
      players = res;
    });

  return players;
}

async function getWinner() {
  let winner;

  await fetch(`/game/${url_id}/winner`)
    .then((res) => res.json())
    .then((res) => {
      winner = res;
    });

  return winner;
}

function printPlayers(players) {
  let tr = document.querySelectorAll('.tr-list');

  tr.forEach((e) => {
    e.innerHTML = '';
  });

  let label_name;
  let count = 0;

  for (let i = 0; i < players.length; i++) {
    if (tr[count].cells.length > 2) {
      count++;
    }

    label_name = document.createElement('td');
    label_name.className = 'name-label';

    label_name.innerText = players[i].name;
    tr[count].appendChild(label_name);
  }
}

async function printPlayersBet() {
  let label_name = document.querySelectorAll('.name-label');
  let winner_label = document.querySelector('.winner-label');

  let players = await getPlayers();
  let winner = await getWinner();

  for (let i = 0; i < players.length; i++) {
    label_name[i].innerHTML += ': ' + players[i].gamer_bet;
  }

  winner_label.innerHTML = 'El ganador es: ' + winner.name;
  winner_label.style.color = 'white';
  winner_label.style.fontSize = '1.5em';
}

init_function();
