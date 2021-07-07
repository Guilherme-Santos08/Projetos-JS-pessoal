const main = document.querySelector("main");
const pokemon_number = 36;

const pokemonGenerator = async () => {
  for (let i = 1; i <= pokemon_number; i++) {
    await getPokemon(i);
  }
};

async function getPokemon(id) {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data);
  createCardPokemon(data);
}

pokemonGenerator();

function createCardPokemon(pokemons) {
  const { name, id, types } = pokemons;
  console.log(id);

  const cardPokemon = document.createElement("div");
  cardPokemon.classList.add("card");
  cardPokemon.innerHTML = `
    <div class="card__img">
       <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="">
     </div>
     <div class="card__id">
       <span>#${id}</span>
     </div>
     <div class="card__name">
       <span>${name}</span>
     </div>
     <div class="card__type">
       <span>${types[0].type.name}</span>
     </div>
     `;
  main.appendChild(cardPokemon);
}
