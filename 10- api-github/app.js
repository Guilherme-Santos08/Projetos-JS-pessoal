const gitHubImg = document.querySelector(".profile__img--img");
const gitHubName = document.querySelector(".profile-name");
const gitHubFollowers = document.querySelector(".profile-followers");
const gitHubFollowing = document.querySelector(".profile-following");
const gitHubRepos = document.querySelector(".profile__repos--number");
const gitHubBio = document.querySelector(".bio__p");
const searchInput = document.querySelector(".input");
const btnSearch = document.querySelector(".btn-search");

const container = document.querySelector(".container");
const form = document.querySelector("form");

async function getGithub(name) {
  const API_URL = `https://api.github.com/users/${name}`;
  // API para visualizar os repositorios públicos
  //   const API_REPOS = `https://api.github.com/users/${name}/repos`
  const res = await fetch(API_URL);
  const data = await res.json();

  try {
    showGitHub(data);
  } catch {
    alert("Perfil não encontrado ou fora do ar");
  }

  console.log(data);
}

function showGitHub(data) {
  const { avatar_url, bio, followers, following, name, public_repos } = data;

  gitHubImg.src = avatar_url;
  gitHubName.innerHTML = name;
  gitHubFollowers.innerHTML = `${followers.toLocaleString("pt-BR")} Seguidores`;
  gitHubFollowing.innerHTML = `${following.toLocaleString("pt-BR")} Seguindo`;
  gitHubBio.innerHTML = bio;
  gitHubRepos.innerHTML = `${public_repos} - Repositórios públicos`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (searchInput.value) {
    getGithub(searchInput.value);
    container.classList.remove("hidden");
    // form.reset()
  }
});

btnSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInput.value) {
    getGithub(searchInput.value);
    container.classList.remove("hidden");
  }
});
