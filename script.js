let cards = document.querySelector(".cards");
let tema = document.querySelector("nav i");
let iCoelho = document.querySelector(".i-coelho img");

const projetos = [
  {
    titulo: "Planner digital",
    src: "planner",
    href: "https://jadecoelho.github.io/planner-digital/",
  },
  {
    titulo: "Galeria de desenhos",
    src: "galeria",
    href: "https://jadecoelho.github.io/galeria-desenhos/",
  },
  {
    titulo: "Website inclusivo",
    src: "acessivel",
    href: "https://jadecoelho.github.io/site-cores-acessiveis/",
  },
  {
    titulo: "Calculadora",
    src: "calculadora",
    href: "https://jadecoelho.github.io/calculadora/",
  },
  {
    titulo: "Site de jogos",
    src: "jogos",
    href: "https://jadecoelho.github.io/meus-jogos/",
  },
  {
    titulo: "To-watch List",
    src: "crud",
    href: "https://jadecoelho.github.io/crud-watch/",
  },
  {
    titulo: "Gerador de senha",
    src: "senha",
    href: "https://jadecoelho.github.io/gerador-senha/",
  },
  {
    titulo: "Countdown (QTF)",
    src: "countdown",
    href: "https://jadecoelho.github.io/countdown/",
  },
  {
    titulo: "Clima agora",
    src: "clima",
    href: "https://jadecoelho.github.io/clima-agora/",
  },
  {
    titulo: "Playlist de músicas",
    src: "playlist",
    href: "https://jadecoelho.github.io/playlist-musicas/",
  },
  {
    titulo: "Roleta bom dia & cia",
    src: "roleta",
    href: "https://jadecoelho.github.io/roleta-sbt/",
  },
  {
    titulo: "Flashcards",
    src: "flashcards",
    href: "https://jadecoelho.github.io/flashcards/",
  },
];
function criaCards() {
  let card;
  for (const element of projetos) {
    let card = document.createElement("div");
    card.classList = "card";
    card.innerHTML = `
  <div class="img-card" style="background-image: url('imgs/${element.src}.png')"></div>
  <div class="info-card">
    <h4 class="titulo-card">${element.titulo}</h4>
    <a href="${element.href}" target="_blank"><i class='bx bx-link-external' ></i>abrir</a>
  </div>
  `;
    cards.appendChild(card);
  }
  return card;
}

criaCards();

tema.addEventListener("click", () => {
  if (tema.classList.contains("bxs-moon")) {
    tema.classList.remove("bxs-moon");
    tema.classList.add("bxs-sun");
    document.body.classList.remove("claro");
    document.body.classList.add("escuro");
  } else {
    tema.classList.remove("bxs-sun");
    tema.classList.add("bxs-moon");
    document.body.classList.remove("escuro");
    document.body.classList.add("claro");
  }
});
