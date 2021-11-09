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
    /**
    cardsDisplay.innerHTML = `<div class="cell">${foundCard.Name}</div>
    <div class="cell"><img src=${foundCard.ImageUrl} alt="Image of ${foundCard.Name}" width="200px" height="300px" /></div>
    <div class="cell">Card Cost</div><div class="cell">${foundCard.Cost}</div>
    <div class="cell">Influence</div><div class="cell">${foundCard.Influence}</div>
    <div class="cell">Attack</div><div class="cell">${foundCard.Attack}</div>
    <div class="cell">Health</div><div class="cell">${foundCard.Health}</div>
    <div class="cell">Rarity</div><div class="cell">${foundCard.Rarity}</div>
    <div class="cell">Type</div><div class="cell">${foundCard.Type}</div>
    <div class="cell">Unit Type</div><div class="cell">${foundCard.UnitType}</div>
    <div class="cell">Deck Buildable?</div><div class="cell">${foundCard.DeckBuildable}</div>
    <div class="cell">More Details Link</div><div class="cell">${foundCard.DetailsUrl}</div>`;
 */
//     cardsDisplay.innerHTML = 
//     `<table class="mobile-table">
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>${foundCard.Name}</td>
//       </tr>
//       <tr>
//         <th>Card Image</th>
//       </tr>
//       <tr>
//         <td><img src=${foundCard.ImageUrl} alt="Image of ${foundCard.Name}" width="200px" height="300px" /></td>
//       <tr>
//       <tr>
//          <th>Card Cost</th> 
//       </tr>
//       <tr>
//          <td>${foundCard.Cost}</td>
//       </tr>
//       <tr>
//          <th>Influence</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.Influence}</td>
//       </tr>
//       <tr>
//         <th>Attack</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.Attack}</td>
//       </tr>
//       <tr>
//          <th>Health</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.Health}</td>
//       </tr>
//       <tr>
//          <th>Rarity</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.Rarity}</td>
//       </tr>
//       <tr>
//          <th>Type</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.Type}</td>
//       </tr>
//       <tr>
//         <th>Unit Type</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.UnitType}</td>
//       </tr>
//       <tr>
//         <th>Deck Buildable?</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.DeckBuildable}</td>
//       </tr>
//       <tr>
//         <th>More Details</th> 
//       </tr>
//       <tr>
//         <td>${foundCard.DetailsUrl}</td>
//       </tr>
//     </table>`;
// }

cardsDisplay.innerHTML = 
    `<div class="mobile-table">
      <div class="heading">
        <h4>Name</h4>
      </div>
      <div class="card-data">
        <p>${foundCard.Name}</p>
      </div>
      <div class="heading">
        <h4>Card Image</h4>
      </div>
      <div class="card-data">
        <img src=${foundCard.ImageUrl} alt="Image of ${foundCard.Name}" width="200px" height="300px" />
      </div>
      <div class="heading">
         <h4>Card Cost</h4> 
      </div>
      <div class="card-data">
         <p>${foundCard.Cost}</p>
      </div>
      <div class="heading">
         <h4>Influence</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.Influence}</p>
      </div>
      <div class="heading">
        <h4>Attack</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.Attack}</p>
      </div>
      <div class="heading">
         <h4>Health</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.Health}</p>
      </div>
      <div class="heading">
         <h4>Rarity</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.Rarity}</p>
      </div>
      <div class="heading">
         <h4>Type</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.Type}</p>
      </div>
      <div class="heading">
        <h4>Unit Type</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.UnitType}</p>
      </div>
      <div class="heading">
        <h4>Deck Buildable?</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.DeckBuildable}</p>
      </div>
      <div class="heading">
        <h4>More Details</h4> 
      </div>
      <div class="card-data">
        <p>${foundCard.DetailsUrl}</p>
      </div>
    </div>`;
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

searchBar.addEventListener("change", () => { getData().then(c => displayFoundCard(c)).catch(e => console.error(e)) } );
findButton.addEventListener("submit", () => { getData().then(c => displayFoundCard(c)).catch(e => console.error(e)) } );


// getData().then(c => displayFoundCard(c[0])).catch(e => console.log(e));
// cardsDisplay.innerHTML = "Whatever 2";

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.querySelector(".card-list").style.width = "250px";
  document.querySelector(".container").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.querySelector(".card-list").style.width = "0";
  document.querySelector(".container").style.marginRight = "0";
}
