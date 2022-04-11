// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1' // string
// console.log({idUser})

// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
// console.log({otherId})

let surprice: any = 'Hello TypeScript.';
//
const algo = surprice.split(' '); // Error en caso de no tener un el tipo string
const second = algo[1];
console.log({second});