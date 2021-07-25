// Function to Start the game. It will reunite generate PokeId, Fetch Pokemon

// Function to ramdomize the 10 id and insert it each of the previous function
let pokeArray = [];

function generatePokeId () {
    for (let i = 0; i < 11; i++) {
        pokeArray.push(Math.floor(Math.random()*897)+1);
    }
    return pokeArray;
}

generatePokeId ();

// function to fetch one Pokemon and create an object
function fetchPokemon () {
    const url = `https://pokeapi.co/api/v2/pokemon/1`; 
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const pokemon = {
                id: data.id,
                name: data.name,
                sprites: data.sprites[`front_default`],
                types: data.types
            }
            console.log(pokemon);
        });
};

fetchPokemon ();

// function to fetch eleven Pokemon and create an object of each of them

let idArray = [];
let endpointArray=[];

function randomPokeArray () {
    for (let i = 0; i < 11; i++) {
        idArray.push(Math.floor(Math.random()*897)+1);
    }
    idArray.forEach(id => endpointArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`));
    console.log(endpointArray);
}

randomPokeArray ();

function fetchElevenPokemon (endpointArray) {
    let url;
    endpointArray.forEach(url)
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const pokemon = {
                id: data.id,
                name: data.name,
                sprites: data.sprites[`front_default`],
                types: data.types
            }
            console.log(pokemon);
        });
};

fetchElevenPokemon ();

// function to get the image
function getPokemonId () {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    pokeArray.forEach(id => console.log(`https://pokeapi.co/api/v2/pokemon/${id}`));
}

getPokemonId ();

const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

// Function to get type

// Function to get the name

// Function to randomize the order od the pokemon on the 20 available cards

// Event listner to start the game

// Event listner to restart the game and utilize the random function to work again

// function to count movements and increase one point for each two selection wrong

// function to count and increade one of each two card selections right

// Battle Mode!!!!!!
