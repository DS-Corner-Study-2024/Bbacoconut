//<Functions as Data>
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

// Write your code below
let isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();

console.log(isTwoPlusTwo.name);



//<Functions as Parameters>
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);

    if(checkA === checkB) {
        return func(val);
    } else { return console.log('inconsistent results'); }
}

console.log(checkConsistentOutput(addTwo, 7));



//<The .forEach() Method>
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);



//<The .filter() Method>
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const smallNumbers = randomNumbers.filter(number => number < 250);

const longFavoriteWords = favoriteWords.filter (element => element.length > 7);



//<The .findIndex() Method>
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => { return animal === 'elephant'; });

const startsWithS = animals.findIndex(element => { return element[0] === 's'; });



//<The .reduce() Method>
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce();
console.log(newSum); 

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum);



//<Iterator Documentation>
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
    return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(iw => iw.length > 5 );

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
    return word.length > 5; }));



//<Choose the Right Iterator>
