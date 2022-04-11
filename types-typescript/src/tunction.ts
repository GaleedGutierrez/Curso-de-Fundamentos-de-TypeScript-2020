// Crear una Fotografía

// function createPicture (title, date, size) {
    
// }

// Usamos TS, definimos tipos para parametros
type SquareSize = '100x100' | '500x500' | '1000x1000';
// function createPicture (title: string, date: string, size: SquareSize) {
//     // se Crea la Fotografía
//     console.log('create picture using', {title, date, size});
// }

// createPicture('My birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03');

// Parámetros opcionales en funciones

function createPicture (title: string, date?: string, size?: SquareSize) {
    // se Crea la Fotografía
    console.log('create picture using', {title, date, size});
}
// createPicture('Colombia Trip', '2020-03');
// createPicture('Trip');

// Flat array function

let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size,
    };
};

const picture = createPic('Platzi session', '2022-03-10', '1000x1000');
console.log({picture})