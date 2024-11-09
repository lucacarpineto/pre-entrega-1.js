// Función para crear un personaje
function createCharacter(name, damage) {
    return {
        name: name,
        damage: damage
    };
}

// Función de batalla para dos personajes
function battle(character1, character2) {
    if (character1.damage > character2.damage) {
        alert(`${character1.name} killed ${character2.name}!`);
        return character1;
    } else if (character1.damage < character2.damage) {
        alert(`${character2.name} killed ${character1.name}!`);
        return character2;
    } else {
        alert("Draw!");
        return null; // en caso de empate
    }
}

// Método de búsqueda 
function findCharacterByName(name) {
    return characters.find(character => character.name.toLowerCase() === name.toLowerCase());
}

// Método de filtrado
function filterCharactersByDamage(minDamage) {
    return characters.filter(character => character.damage >= minDamage);
}

// Array q guarda los pjs
const characters = [];
const numCharacters = parseInt(prompt("How many characters do you want to create?"));

// Creación de los pj con prompt
for (let i = 1; i <= numCharacters; i++) {
    const name = prompt(`Enter the name of character ${i}:`);
    const damage = parseInt(prompt(`Enter the damage of character ${i}:`));
    characters.push(createCharacter(name, damage));
}

// Búscar y filtrar
const searchName = prompt("Enter the name of the character to search:");
const foundCharacter = findCharacterByName(searchName);
if (foundCharacter) {
    alert(`Character found: ${foundCharacter.name}, Damage: ${foundCharacter.damage}`);
} else {
    alert("Character not found.");
}

const minDamage = parseInt(prompt("Enter minimum damage to filter characters:"));
const filteredCharacters = filterCharactersByDamage(minDamage);
if (filteredCharacters.length > 0) {
    alert("Characters with at least " + minDamage + " damage:");
    filteredCharacters.forEach(character => alert(`- ${character.name}, Damage: ${character.damage}`));
} else {
    alert("No characters with that level of damage found.");
}

// Batalla
for (let i = 0; i < characters.length - 1; i++) {
    const winner = battle(characters[i], characters[i + 1]);
    if (winner) {
        console.log(`${winner.name} advances to the next round.`);
    }
}
