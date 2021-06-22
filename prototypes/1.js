const Person = {
    alive: true
};

const musician = {
    plays: true
};

musician.__proto__ = Person;
console.log(musician.plays);
console.log(musician.alive);
