let container = document.querySelector(".container");
let searchBar = document.querySelector(".search-bar");
let cardsDisplay = document.querySelector(".cards");
let findButton = document.querySelector(".find");
// let cardList = document.querySelector(".card-list");
// let dropdown = document.querySelector(".dropdown");

// let optionArr = ['Opt. 1', 'Opt. 2', 'Opt. 3', 'Opt. 4']

async function getData() {
    let baseUrl = `eternal-cards.json`;
    let response = await fetch(baseUrl);
    let data = await response.json();

    return data;
}


// function getCardHtml(card) {
//     return `<div class="card">
//                 <div class="card-name">${card.Name}</div>
//                 <div class="card-image"><img src="${card.ImageUrl}" alt="Image of ${card.Name}" width="200" height="300" /></div>
//             </div>`
// }

// function getCardEntry(entry) {
//     return `<option>${entry}</option>`;
// }

// function displayCardList(cards) {
//     dropdown.innerHTML = cards.map(card => getCardEntry(card));
// }

// function displayCards(cards) {
//     cardsDisplay.innerHTML = `${cards.map(card => getCardHtml(card)).join('')}`;
// }

// function displayCards2(cards) {
//     dropdown.innerHTML = cards.map(card => getCardEntry(card));
// }


function fetchFoundCard(card) {
   return card.Name === searchBar.value; 
}

function displayFoundCard(cards) {
    let foundCard = cards.find(fetchFoundCard);
    
    cardsDisplay.innerHTML = `<div>${foundCard.Name}</div>
                            <div><img src=${foundCard.ImageUrl} alt="Image of ${foundCard.Name}" width="200px" height="300px" /></div>`;
}

/*
function displayShows(shows) {
    document.body.innerHTML = `<div class="my-shows">
        ${shows.map(show => getShowHtml(show.show)).join('')}
    </div>` 
}
*/

// might be needed later, when I want to take the project to the "next level"
// function getCardHtml2(card) {
//     return `<div>
//                 <div class="card-name">${card.Name}</div>
//                 <div class="card-text">${card.CardText}</div>
//                 <div class="card-cost">${card.Cost}</div>
//                 <div class="card-influence">${card.Influence}</div>
//                 <div class="card-attack">${card.Attack}</div>
//                 <div class="card-health">${card.Health}</div>
//                 <div class="card-rarity">${card.Rarity}</div>
//                 <div class="card-type">${card.Type}</div>
//                 <div class="card-unit-type">${card.UnitType}</div>
//                 <div class="card-image">${card.ImageUrl}</div>
//                 <div class="card-deck-buildable">${card.DeckBuildable}</div>
//             </div>`
// }


// searchBar.addEventListener("change", () => { getData().then(c => console.log(c.find(fetchFoundCard).Name)).catch(e => console.log(e)) } );
// searchBar.addEventListener("change", () => { getData().then(c => cardsDisplay.innerHTML = c.find(fetchFoundCard).Name).catch(e => console.log(e)) } );
// findButton.addEventListener("submit", () => { getData().then(c => cardsDisplay.innerHTML = c.find(fetchFoundCard).Name).catch(e => console.error(e)) } );

searchBar.addEventListener("change", () => { getData().then(c => displayFoundCard(c)).catch(e => console.log(e)) } );
findButton.addEventListener("submit", () => { getData().then(c => displayFoundCard(c)).catch(e => console.error(e)) } );



// getData().then(c => displayFoundCard(c[0])).catch(e => console.log(e));
// cardsDisplay.innerHTML = "Whatever 2";

