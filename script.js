// Función para crear un personaje
function createCharacter(name, damage) {
    return {
        name: name,
        damage: damage
    };
}

// Función de batalla
function battle(character1, character2) {
    if (character1.damage > character2.damage) {
        alert(`${character1.name} killed ${character2.name}!`);
    } else if (character1.damage < character2.damage) {
        alert(`${character2.name} killed ${character1.name}!`);
    } else {
        alert("Draw!");
    }
}

// Uso de FOR y PROMPT, y constante para guardar los pjs
const characters = [];

for (let i = 1; i <= 2; i++) {
    const name = prompt(`Enter the name of character ${i}:`);
    const damage = parseInt(prompt(`Enter the damage of character ${i}:`));
    characters.push(createCharacter(name, damage));
}

// llamado a la función
battle(characters[0], characters[1]);