// Function to ramdomize the 10 id and insert it each of the previous function
let pokeArray = [];

function generatePokeId () {
    for (let i = 0; i < 11; i++) {
        pokeArray.push(Math.floor(Math.random()*897)+1);
    }
    return pokeArray;
}

generatePokeId ();

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
