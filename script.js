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

// Uso de prompt
const name1 = prompt("Enter the name of character 1:");
const damage1 = parseInt(prompt("Enter the damage of character 1:"));

const name2 = prompt("Enter the name of character 2:");
const damage2 = parseInt(prompt("Enter the damage of character 2:"));

// Creación de personajes x el prompt
const pjUno = createCharacter(name1, damage1);
const pjDos = createCharacter(name2, damage2);

// Llamado a la batalla
battle(pjUno, pjDos);