start_button = document.querySelector('.start-button');
var url = window.location.pathname;

start_button.onclick = async function(e) {
    e.preventDefault();
    printPlayers(await getPlayers());
};

async function getPlayers() {
    url = url.slice(6);
    let players;

    await fetch(`/gamers/${url}`)
        .then(res => res.json())
        .then((res) => {
            players = res;
        });

    return(players);
}

function printPlayers(players) {
    let label_name = document.querySelectorAll('.name-label');
    
    for(let i = 0; i < players.length; i++) {
        label_name[i].innerHTML = players[i].name;
        
    }
    
    console.log(players);
    setStyles(label_name);
}

function setStyles(label_name){
    label_name.forEach(element => {
        element.style.color = 'white';
        element.style.fontSize = '1.5em';
    });
}
