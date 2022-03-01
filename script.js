// const pokList = [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }, { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" }, { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" }, { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" }, { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" }, { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" }, { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" }, { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" }, { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" }, { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" }, { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" }, { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" }, { "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/" }, { "name": "kakuna", "url": "https://pokeapi.co/api/v2/pokemon/14/" }, { "name": "beedrill", "url": "https://pokeapi.co/api/v2/pokemon/15/" }, { "name": "pidgey", "url": "https://pokeapi.co/api/v2/pokemon/16/" }, { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" }, { "name": "pidgeot", "url": "https://pokeapi.co/api/v2/pokemon/18/" }, { "name": "rattata", "url": "https://pokeapi.co/api/v2/pokemon/19/" }, { "name": "raticate", "url": "https://pokeapi.co/api/v2/pokemon/20/" }, { "name": "spearow", "url": "https://pokeapi.co/api/v2/pokemon/21/" }, { "name": "fearow", "url": "https://pokeapi.co/api/v2/pokemon/22/" }, { "name": "ekans", "url": "https://pokeapi.co/api/v2/pokemon/23/" }, { "name": "arbok", "url": "https://pokeapi.co/api/v2/pokemon/24/" }, { "name": "pikachu", "url": "https://pokeapi.co/api/v2/pokemon/25/" }, { "name": "raichu", "url": "https://pokeapi.co/api/v2/pokemon/26/" }, { "name": "sandshrew", "url": "https://pokeapi.co/api/v2/pokemon/27/" }, { "name": "sandslash", "url": "https://pokeapi.co/api/v2/pokemon/28/" }, { "name": "nidoran-f", "url": "https://pokeapi.co/api/v2/pokemon/29/" }, { "name": "nidorina", "url": "https://pokeapi.co/api/v2/pokemon/30/" }, { "name": "nidoqueen", "url": "https://pokeapi.co/api/v2/pokemon/31/" }, { "name": "nidoran-m", "url": "https://pokeapi.co/api/v2/pokemon/32/" }, { "name": "nidorino", "url": "https://pokeapi.co/api/v2/pokemon/33/" }, { "name": "nidoking", "url": "https://pokeapi.co/api/v2/pokemon/34/" }, { "name": "clefairy", "url": "https://pokeapi.co/api/v2/pokemon/35/" }, { "name": "clefable", "url": "https://pokeapi.co/api/v2/pokemon/36/" }, { "name": "vulpix", "url": "https://pokeapi.co/api/v2/pokemon/37/" }, { "name": "ninetales", "url": "https://pokeapi.co/api/v2/pokemon/38/" }, { "name": "jigglypuff", "url": "https://pokeapi.co/api/v2/pokemon/39/" }, { "name": "wigglytuff", "url": "https://pokeapi.co/api/v2/pokemon/40/" }, { "name": "zubat", "url": "https://pokeapi.co/api/v2/pokemon/41/" }, { "name": "golbat", "url": "https://pokeapi.co/api/v2/pokemon/42/" }, { "name": "oddish", "url": "https://pokeapi.co/api/v2/pokemon/43/" }, { "name": "gloom", "url": "https://pokeapi.co/api/v2/pokemon/44/" }, { "name": "vileplume", "url": "https://pokeapi.co/api/v2/pokemon/45/" }, { "name": "paras", "url": "https://pokeapi.co/api/v2/pokemon/46/" }, { "name": "parasect", "url": "https://pokeapi.co/api/v2/pokemon/47/" }, { "name": "venonat", "url": "https://pokeapi.co/api/v2/pokemon/48/" }, { "name": "venomoth", "url": "https://pokeapi.co/api/v2/pokemon/49/" }, { "name": "diglett", "url": "https://pokeapi.co/api/v2/pokemon/50/" }]

const container = document.querySelector(".poki-list")


function createPokemon({ name, url }) {
    document.querySelector(".poki-list").innerHTML +=
        `<div class="poki-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="" class="pok-pic">
        <h3 class="pok-name">${name}</h3>
        <button type="button" onclick=${url}>Click Me!</button>
         </div>`
}

// pokList.forEach(pokemon => createPokemon(pokemon));

// fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
//     .then((data) => data.json())
//     .then((pokList) => console.log(pokList));


function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((data) => data.json())
        .then((pokList) => DisplayData(pokList.results))
}
getPokemon()

function DisplayData(pokData) {
    pokData.forEach(item => {
        const PokName = item.name
        const card = document.createElement("div")
        const title = document.createElement("h4")
        title.textContent = PokName
        const button = document.createElement("button")
        button.textContent = "show Details"
        button.addEventListener("click", () => {
            fetchPokDetails(PokName)
        })
        card.appendChild(title)
        card.appendChild(button)
        container.appendChild(card)
    })

}

function fetchPokDetails(name) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + name
    fetch(url)
        .then((data) => data.json())
        .then((pokList) => {
            console.log(pokList)

        })
}