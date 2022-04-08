export {};

// [1, 'user']
let user: [number, string];
user = [1, 'Galeed'];

// console.log({user});
// console.log('username: ', user[1]);
// console.log('id: ', user[0]);
// console.log('user[1].length: ', user[1].length);

// Tuplas con varios valores.
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
// console.log({userInfo});

// Arreglo de tuplas
let array: [number, string][] = [];

array.push([1, 'Galeed1']);
array.push([2, 'Galeed2']);
array.push([3, 'Galeed3']);
console.log('Antes',{array});

// Uso de funciones Array
// Galeed3 -> Galeed3001
array[2][1] = array[2][1].concat('001'); // Galeed3001
console.log('Ahora',{array});

