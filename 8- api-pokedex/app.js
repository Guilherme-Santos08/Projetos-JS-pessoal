// alert("API fornecida pela 'https://pokeapi.co/docs/v2'");
const main = document.querySelector("main");
let pokemon_number = 130;

// Códigos das cores pegada do canal "Florin Pop" 1/2
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

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

  // Códigos das cores pegada do canal "Florin Pop" 2/2
  const poke_types = pokemons.types.map((type) => type.type.name);
  // console.log(poke_types)
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  const cardPokemon = document.createElement("div");
  cardPokemon.classList.add("card");

  cardPokemon.style.backgroundColor = color;

  cardPokemon.innerHTML = `
    <div class="card__img">
       <img src="" alt="">
     </div>
     <div class="card__id">
       <span>#${id.toString().padStart(3, "0")}</span>
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
