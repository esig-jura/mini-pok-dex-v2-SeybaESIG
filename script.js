/**
 * Exercice : Mini Pokédex
 * @author Steve Fallet <steve.fallet@dvitec.ch>
 * @since 2024-09-01
 */

'use strict';

// Couleur par défaut pour les types de Pokémon non définis
const DEFAULT_COLOR = '#ccc';

// Couleurs pour chaque type de Pokémon
const typeColors = {
    'Électrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fée': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

// Tableau d'objets représentant les Pokémon
const pokemons = [
    { name: 'Pikachu', type: 'Électrique', level: 35, img: 'pikachu.png' },
    { name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'carapuce.png' },
    { name: 'Rondoudou', type: 'Normal,Fée', level: 25, img: 'rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'ectoplasma.png' },
    { name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'evoli.png' },
    { name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'dracaufeu.png' },
    { name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'florizarre.png' },
    { name: 'Tortank', type: 'Eau', level: 52, img: 'tortank.png' },
    { name: 'Mélofée', type: 'Fée', level: 18, img: 'melofee.png' },
    { name: 'Raichu', type: 'Électrique', level: 40, img: 'raichu.png' },
    { name: 'Magicarpe', type: 'Eau', level: 5, img: 'magicarpe.png' },
    { name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'lokhlass.png' },
    { name: 'Onix', type: 'Roche,Sol', level: 30, img: 'onix.png' },
    { name: 'Ronflex', type: 'Normal', level: 45, img: 'ronflex.png' },
    { name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png' }
];

// Tableau qui stock les types de Pokémon
let types = [];

// Sélection de l'élément conteneur des Pokémons
const container = document.querySelector('.pokemon-container');

/**
 * Fonction pour afficher les Pokémons
 * @returns {void}
 */
function displayPokemons() {
    container.innerHTML = "";
    if (pokemons.length === 0) {
        container.innerHTML = '<p>Dracaufeu a tout brûlé, aucun Pokémon ne correspond à ta recherche !</p>\n';
    } else {
        for (let pokemon of pokemons){
            // ICI
            /*
            p.innerHTML = `${pokemon.name} `;
            types = pokemon.type.split(',');
            for (let type of types) {
                p.innerHTML += `<small>${type}</small> `
                }
             */

            const div = document.createElement("div");
            div.innerHTML = generatePokemonCardHTML(pokemon);
            container.appendChild(div)
        }
    }
}

function generatePokemonCardHTML(pokemon){
    let typeToReturn = "";
    if (pokemon.type.includes(',')) {
        types = pokemon.type.split(',');
        typeToReturn = types.join(' / ')

        return `
        <div class="pokemon-card" style="background: linear-gradient(to right, ${typeColors[types[0]] || DEFAULT_COLOR} 50%, ${typeColors[types[1]] || DEFAULT_COLOR} 50%);">
            <img src="images/${pokemon.img}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <div>Type: ${typeToReturn}</div>
            <div>Niveau: ${pokemon.level}</div>
        </div>
    `;
    }

    typeToReturn = pokemon.type;
    return `
        <div class="pokemon-card" style="background: ${typeColors[pokemon.type] || DEFAULT_COLOR};">
            <img src="images/${pokemon.img}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <div>Type: ${typeToReturn}</div>
            <div>Niveau: ${pokemon.level}</div>
        </div>
    `;
}

// Lance la fonction displayPokemons une fois la page chargée
window.addEventListener('load', displayPokemons);