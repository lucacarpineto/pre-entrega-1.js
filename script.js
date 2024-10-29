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
        console.log(`${character1.name} killed ${character2.name}!`);
    } else if (character1.damage < character2.damage) {
        console.log(`${character2.name} killed ${character1.name}!`);
    } else {
        console.log(`Draw!`);
    }
}

// Personajes credaos usando la función anterior
const pjUno = createCharacter("Alaric", 50);
const pjDos = createCharacter("Thorne", 40);

// LLamado
battle(pjUno, pjDos);
