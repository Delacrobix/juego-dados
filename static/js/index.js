const input_button = document.getElementById('players-btn');
document.getElementById('submit-button').style.display = 'none';

input_button.onclick = function(e){
    e.preventDefault();
    createGame();
}

function createGame(){
    let num_players = document.getElementById('input-player').value;

    if(validateData(num_players)){
        document.getElementById('players-btn').style.display = 'none';
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