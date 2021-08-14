/**
 * Function start the game run randomUrl and cardSelection after an 
 * eventlistner click on the button start.
 */
function start (event) {
    randomUrl();
    hoverCards();
    // flipCards();
    matchCards();
}

let btnStart = document.getElementById('btnStart');
btnStart.addEventListener("click", start);

/**Function which reloads the page through event listner click in the button restart
 */
function restart() {
    window.location.reload();
    setTimeout(start, 1000);
 }


let btnRestart = document.getElementById('btnRestart');
btnRestart.addEventListener("click", restart);
/**
 * Function randomize 10 id numbers and append this id numbers to urls in the 
 * format of API endpoint and insert through push into urlArray
 */
function randomUrl () {
    let idArray = [];
    for (let i = 0; i < 10; i++) {
        idArray.push(Math.floor(Math.random()*897)+1);
    }
    idArray.forEach(id => urlArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`));
    idArray.forEach(id => urlArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`));
    cardSelection();
}

let urlArray=[];

/**
 * function to populated selectedPokeArray with 10 pokemon objects with fetch 
 * information from pokeapi
 */
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
        setTimeout(randomPokeArray, 2000);
}

let selectedPokeArray =[];

// The credit for this code is from [https://flaviocopes.com/how-to-shuffle-array-javascript/]
/**
 * Function to shuffle the order of the pokemon objects inside the array 
 * selecedPokeArray
 */
function randomPokeArray() {
    selectedPokeArray.sort(() => Math.random() - 0.5);
     console.log(selectedPokeArray);
     displayPokeInfo();
}

/**
 * function to replace the html attributes of the 20 cards through the 
 * 20 objects organised into the array selectedPokeArray
 */
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

/**
 * Function which create a event lister click to "flip" each card from 
 * backface to frontFace through toggle backface class
 */
// function flipCards() {
//     function removeBackFace(event) {
//         // return this to toggle instead remove if my tests dosent works
//         this.classList.toggle('backFace');
//     }

//     let pokeCard = document.getElementsByClassName('pokeCard');
//     for (let i = 0; i < pokeCard.length; i++) {
//         pokeCard[i].addEventListener("click", removeBackFace);
//     }
//     // matchCards ();    
// }


// function flipCards() {
//     function removeBackFace(event) {
//         // return this to toggle instead remove if my tests dosent works
//         this.classList.remove('backFace');
//     }

//     let pokeCard = document.getElementsByClassName('pokeCard');
//     for (let i = 0; i < pokeCard.length; i++) {
//         pokeCard[i].addEventListener("click", removeBackFace);
//     }
//     // matchCards ();    
// }

/**
 * Function which create a event lister mouseover and mouseleave on every 
 * card and then toggle a class which add border   
 */
function hoverCards () {
    function addBorder(event) {
        this.classList.toggle('cardBorder');
        // console.log('clicked');
    }

    function removeBorder(event) {
        this.classList.remove('cardBorder');
    }

    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", addBorder);
        cards[i].addEventListener("mouseleave", removeBorder);
    }    
}

// Code inspired by this video Tutorial https://www.youtube.com/watch?v=ZniVgo8U7ek but edited by myself to reach my project settings
/**
 * Function to match to equal cards
 */
 let lockBoard = false;
 let flippedCard = false;
 let firstCard, secondCard;
 
 function matchCards () {
     if (lockBoard) return;
     if (this === firstCard) return;
     let pokeCard = document.getElementsByClassName('pokeCard');
 
     function removeBackFace(event) {
         this.classList.remove('backFace');
     }
 
     function getPokeName (event) {
         if (flippedCard === false) {
             flippedCard = true;
             firstCard = this;
         } else {
             flippedCard = false;
             secondCard = this;
         
             if (firstCard.parentElement.getElementsByClassName('pokeName')[0].innerHTML === secondCard.parentElement.getElementsByClassName('pokeName')[0].innerHTML) {
             console.log("Deu Match");
                 if (lockBoard) return;
                 firstCard.classList.remove('backFace');
                 secondCard.classList.remove('backFace');
                 firstCard.removeEventListener('click', removeBackFace);
                 secondCard.removeEventListener('click', removeBackFace);
                 // firstCard.removeEventListener('click', getPokeName);
                 // secondCard.removeEventListener('click', getPokeName);
                 resetBoard();
              } else {
                 lockBoard = true;
                 
                 console.log('Nao deu match');
                 setTimeout(() => {
                     firstCard.classList.add('backFace');
                     secondCard.classList.add('backFace');
 
                     resetBoard();
                 }, 1000);   
             }      
         }
     }
 
 
     for (let i = 0; i < 20; i++) {
         pokeCard[i].addEventListener("click", getPokeName);
         pokeCard[i].addEventListener("click", removeBackFace);
     }   
 }
 
 function resetBoard(params) {
     [flippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
 }

/**
 * function to count movements and increase one point for each two
 * selection wrong
 */

// function to count and increade one of each two card selections right

// Battle Mode!!!!!!


