const species = ['Rabbit', 'Wolf', 'Bear', 'Human', 'Bison'];

let canEatMeat = true;

const eatMeatInfo = ['I am vegeterian. I do not like another species', 'I am meat eater. I do not know how to eat only leaves and grass', 'I can eat everything. I like honey and fish, and no matter how many to eat'];

const messages = ['I need to find some berries!', 'I need to catch some prey!'];


// Functions 

const getIndexOfSpecies = () => {
    let indexOfSpecies = Math.floor(Math.random()*species.length);
    if(indexOfSpecies === 0) {
     return indexOfSpecies;
    } else {
     return indexOfSpecies -= 1;
    }
   }

const printMixedMessage = () => {
      let indexOfSpecies = getIndexOfSpecies();
      if(species[indexOfSpecies] === 'Rabbit') {
        return `Hello I am ${species[indexOfSpecies]}. ${eatMeatInfo[0]}. ${messages[0]}`;
      } else if(species[indexOfSpecies] === 'Bear') {
        return `Hello I am ${species[indexOfSpecies]}. ${eatMeatInfo[eatMeatInfo.length-1]}. ${messages[messages.length-1]}`;
      } else {
        return `Hello I am ${species[indexOfSpecies]}. ${eatMeatInfo[1]}. ${messages[1]}`;
      }
}

//console.log(getIndexOfSpecies());
console.log(printMixedMessage());