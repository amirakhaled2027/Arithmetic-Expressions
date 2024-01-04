
let friends = 5;
friends = friends + 1;
console.log(friends);

let students = 40;
students = students - 5;
console.log(students);

let boys = 15;
boys = boys * 3;
console.log(boys);

let girls = 25;
girls = girls / 5;
console.log(girls);

let extraGirls = girls % 4;
console.log(extraGirls);

//now let's explore the shortcuts
let readers = 40;
readers += 10; 
console.log(readers);

let writers = 15; 
writers -= 5; 
console.log(writers);

let teachers = 5;
teachers *= 2; 
console.log(teachers);

let coders = 9;
coders /= 3; 
console.log(coders);

let softwareEngineers = 13;
softwareEngineers %= 4;
console.log(softwareEngineers);

//operator precedence

let precedent = (2 + 400) * 5 - 4 / 60;
let anotherPrecedent = (2 + 400) * (5 - 4) / 60;
console.log(precedent); 
console.log(anotherPrecedent);
