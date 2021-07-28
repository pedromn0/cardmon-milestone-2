// Function Start the game. It will run randomUrl and cardSelection after an eventlistner click on the button start. 

// Function to ramdomize 10 id and insert them in an array
let urlArray=[];

function randomUrl () {
    let idArray = [];
    for (let i = 0; i < 11; i++) {
        idArray.push(Math.floor(Math.random()*897)+1);
    }
    idArray.forEach(id => urlArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`));
}

randomUrl ();

// function to create an array populated with 10 objects of pokemon fetched from pokeapi
let selectedPokeArray =[];

function cardSelection () {
    urlArray.forEach(url => fetch(url)
        .then(response => response.json())
        .then((data) => {
            const pokemon = selectedPokeArray.push({
                id: data.id,
                name: data.name,
                sprites: data.sprites[`front_default`],
                types: data.types
            });
            
        }));
        console.log(selectedPokeArray);    
}

cardSelection ();

// Function to randomize the order od the pokemon on the 20 available cards

// Event listner to restart the game and utilize the random function to work again

// function to count movements and increase one point for each two selection wrong

// function to count and increade one of each two card selections right

// Battle Mode!!!!!!
