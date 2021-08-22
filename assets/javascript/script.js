/**
 * Function start the game run randomUrl and cardSelection after an 
 * eventlistner click on the button start.
 */
 function start (event) {
    this.removeEventListener("click", start);
    alert('Hello. Click ok and wait 2 seconds to loading...');
    randomUrl();
    hoverCards();
}

let btnStart = document.getElementById('btnStart');
btnStart.addEventListener("click", start);
btnStart.addEventListener("click", enableBtnShuffle);

/**Function which reloads the page through event listner click in the button restart
 */
function restart() {
    window.location.reload();
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
    setTimeout(cardSelection, 300);
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
        setTimeout(randomPokeArray, 2000);
        return selectedPokeArray;
}

let selectedPokeArray =[];

// The credit for this code is from [https://flaviocopes.com/how-to-shuffle-array-javascript/]
/**
 * Function to shuffle the order of the pokemon objects inside the array 
 * selecedPokeArray
 */
function randomPokeArray(event) {
    selectedPokeArray.sort(() => Math.random() - 0.5);
     setTimeout(displayPokeInfo, 200);
}

let btnShuffle = document.getElementById('btnShuffle');
btnShuffle.addEventListener("click", randomPokeArray,randomPokeArray);

function enableBtnShuffle(event) {
    btnShuffle.removeAttribute("disabled", "");
}

function disabledBtnShuffle (event) {
    if (parseInt(document.getElementById("score").innerText) > 0){
        btnShuffle.setAttribute("disabled", "")
    }
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
 * Function which create a event lister mouseover and mouseleave on every 
 * card and then toggle a class which add border   
 */
function hoverCards () {
    function addBorder(event) {
        this.classList.toggle('cardBorder');
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
 * Function to chekc if the two cards clicked matches and give flip to cards
 */
 let flippedCard = false;
 let lockBoard = false;
 let firstCard, secondCard;
 
  function matchCards (event) {
     if (lockBoard) return;
     if (this === firstCard) return;

    this.classList.remove('backFace');
        
    
     if (!flippedCard) {
         flippedCard = true;
         firstCard = this;
         return;
     }
 
     secondCard = this;
    lockBoard = true;
             
     checkForMatch(firstCard, secondCard);
 }
     
 function checkForMatch(firstCard, secondCard) {
     let isMatch = firstCard.parentElement.getElementsByClassName('pokeName')[0].innerHTML === secondCard.parentElement.getElementsByClassName('pokeName')[0].innerHTML;
         isMatch ? disableCards(firstCard, secondCard) : unflipCards(firstCard, secondCard);
 }
     
 function disableCards () {
     firstCard.removeEventListener('click', matchCards);
     secondCard.removeEventListener('click', matchCards);
 
     incrementScore();
     resetBoard();
 }
 
 function unflipCards () {
     setTimeout(() => {
         firstCard.classList.add('backFace');
         secondCard.classList.add('backFace');
 
         incrementWrongAnswer();
         resetBoard();
         }, 1200);
 }
 
 let pokeCards = document.getElementsByClassName('pokeCard');
 
 for (let i = 0; i < 20; i++) {
     pokeCards[i].addEventListener("click", matchCards);
     pokeCards[i].addEventListener("click", disabledBtnShuffle);
 }

 function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/**
 * Function to increments the score every two
 * right selection
 */
 function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    if (oldScore === 10) {
        alert('Hey congrats!! Do you want play again? Press Start', restart());
    } else {
        setTimeout(()=>alert("Nicely done! Ready for your next catch!"), 200);
    }
}
/**
 * Function to increments every two wrong card selections
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}