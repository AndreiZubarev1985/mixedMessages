const species = ['Rabbit', 'Wolf', 'Bear', 'Human', 'Bison'];

const eatMeatInfo = ['I am vegeterian. I do not like another species', 'I am meat eater. I do not know how to eat only leaves and grass', 'I can eat everything. I like honey and fish, and no matter how many to eat'];

const messages = ['I need to find some berries!', 'I need to catch some prey!'];


// Functions 

const getIndex = (arr) => {
    let index = Math.floor(Math.random()*arr.length);
    if(index === 0) {
     return index;
    } else {
     return index -= 1;
    }
   }

const printMixedMessage = () => {
      let index = getIndex(species);
      if(species[index] === 'Rabbit') {
        return `Hello I am ${species[index]}. ${eatMeatInfo[0]}. ${messages[0]}`;
      } else if(species[index] === 'Bear' || species[index] === 'Human') {
        return `Hello I am ${species[index]}. ${eatMeatInfo[eatMeatInfo.length-1]}. ${messages[getIndex(messages)]}`;
      } else {
        return `Hello I am ${species[index]}. ${eatMeatInfo[1]}. ${messages[1]}`;
      }
}

//console.log(getIndexOfSpecies());
console.log(printMixedMessage());