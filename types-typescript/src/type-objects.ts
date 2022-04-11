// Type: object

let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'GaleedXD',
    firstName: 'Galeed',
    isPro: true
}

// console.log({user});

// Object vs object(clase js vs tipo ts)
const myObject = {
    id: 1,
    username: 'GaleedXD',
    firstName: 'Galeed',
    isPro: true
};

const isInstance = myObject instanceof Object; // Clase Object de JS
console.log('isInstance', isInstance);
console.log('myObject.username', myObject.username);