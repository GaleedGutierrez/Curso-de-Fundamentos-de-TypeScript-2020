// Array

// Tipo Explicito
let users: string[];
users = ['luixaviles', 'paparazzi', 'lesqueen'];
// users = [1, true, 'test']; // Error de tipos de datos.
let otherUsers = ['luixaviles', 'paparazzi', 'lesqueen'];
// otherUsers = [1, true, 'test']; // Error de tipos de datos.

// Array<tipo>

let picturesTitles: Array<string>;
picturesTitles = ['Favorite Sunset', 'Vations Time', 'Landscape'];

// Accediendo a los valores de una array
console.log('first user',users[0]);
console.log('first title',picturesTitles[0]);

// Propiedades en Array
console.log('users.length' ,users.length);

// Uso de funciones en Arreglos
users.push('aPlatziUser');
users.sort();
console.log({users})