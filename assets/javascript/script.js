// Function start the game run randomUrl and cardSelection after an eventlistner click on the button start.

function start (event) {
    randomUrl();
    clickCard();
}

let btnStart = document.getElementById('btnStart');
btnStart.addEventListener("click", start);

// Function randomUrl randomize 10 id numbers, add them to urls and insert them in an array
let urlArray=[];

function randomUrl () {
    let idArray = [];
    for (let i = 0; i < 10; i++) {
        idArray.push(Math.floor(Math.random()*897)+1);
    }
    idArray.forEach(id => urlArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`));
    idArray.forEach(id => urlArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`));
    cardSelection();
}

// function to create an array populated with 10 objects of pokemon fetched from pokeapi
let selectedPokeArray =[];

function cardSelection () {
    urlArray.forEach(url => fetch(url)
        .then(response => response.json())
        .then((data) => {
            let pokemon = selectedPokeArray.push({
                id: data.id,
                name: data.name,
                sprites: data.sprites[`front_default`],
                types: data.types.map(type =>type.type.name)
            });
        }));
        console.log(selectedPokeArray);
        setTimeout(randomPokeArray, 1000);
}

// The credit for this code is from [https://flaviocopes.com/how-to-shuffle-array-javascript/] - Function to shuffle the order of the pokemon objects inside the array selecedPokeArray
function randomPokeArray() {
    selectedPokeArray.sort(() => Math.random() - 0.5);
     console.log(selectedPokeArray);
     displayPokeInfo();
}

// function to replace the html attributes of the 20 cards through the 20 objects organised into the array selectedPokeArray

function displayPokeInfo () {
    let pokeName = document.getElementsByClassName('pokeName');
    let sprites = document.getElementsByClassName('sprites');
    let pokeType = document.getElementsByClassName('pokeType');
    for (let i = 0; i < 20; i++) {
        pokeName[i].innerText = selectedPokeArray[i].name;
        sprites[i].setAttribute('src', selectedPokeArray[i].sprites);
        pokeType[i].innerHTML = selectedPokeArray[i].types;
    }
} 

// Create a funciton restart which will trigger through an event listner click on restart the game and start the functions from the start.

// Create a event lister to allow card selection clinking on them. 

function clickCard () {
    function addBorder(event) {
        this.classList.toggle('cardBorder');
    }

    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", addBorder);
    }    
}


// function to count movements and increase one point for each two selection wrong

// function to count and increade one of each two card selections right

// Battle Mode!!!!!!
