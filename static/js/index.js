const input_button = document.getElementById('players-btn');
const submit_button = document.getElementById('submit-button');
submit_button.style.display = 'none'

input_button.onclick = function(e){
    e.preventDefault();
    deleteInputs();
    createGame();
    
}

submit_button.onclick = function(e){
    sendData();
    e.preventDefault();
}

async function sendData(){
    let inputs = document.querySelectorAll('#player-in');
    let players_array = [];

    inputs.forEach(element => {
        players_array.push(element.value);
    });

    let game_data = {
        gamers: players_array,
        type: 'normal',
        inProgress: true
    };

    let response_data;

    await fetch('/createGame', {
        method: 'POST',
        body: JSON.stringify(game_data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => response_data = response);

    location.href = `/game/${response_data._id}`;
}

function deleteInputs(){
    let inputs = document.querySelectorAll('#player-in');
    let labels = document.querySelectorAll('.form-label')

    document.getElementById('label-errors').innerHTML = '';

    inputs.forEach(element => {
        element.remove();
    });

    labels.forEach(element => {
        element.remove();
    });
}

function createGame(){
    let num_players = document.getElementById('input-player').value;

    if(validateData(num_players)){
        document.getElementById('submit-button').style.display = 'block';
        for(let i = 0; i < parseInt(num_players); i++){
            let div = document.createElement('div');
            div.id = 'div-gamers-' + i;
            document.getElementById('form-input').appendChild(div);
            addPlayer(i);
        }
    }
}

function getOneName(){
    let names = ['Juan', 'Rocío', 'Mike', 'Carlos', 'Camila', 'Jhon', 'Maria', 'Pablo', 'Richard',
                 'Ash', 'Fernando', 'Roberto', 'Loise', 'Melissa', 'Fazt', 'Moe', 'Chloe'];

    return names[Math.floor(Math.random()*17)];
}

function addPlayer(index){
    let form = document.getElementById('div-gamers-' + index);
    let player_label = document.createElement('label');
    let player_input = document.createElement('input');

    let player_name = getOneName();

    player_label.innerHTML = 'Jugador ' + (index + 1);
    player_label.className = 'form-label';

    player_input.name = 'gamers';
    player_input.className = 'form-control';
    player_input.id = 'player-in';
    player_input.value = player_name;

    form.appendChild(player_label);
    form.appendChild(player_input);
}

function validateData(players){
    if(!isNaN(players)){
        let num_players = parseInt(players);
        if((num_players > 1) && (num_players < 13)){
            
            return true;
        }else{
            document.getElementById('label-errors').innerHTML = 
                "Por favor, un numero del 2 al 12";
            
            return false;
        }
    }else{
        document.getElementById('label-errors').innerHTML = 
            "Por favor, ingrese un dato valido";

        return false;
    }
}