export {};
// Funcion para mostrar una fotografía
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture (picture: Picture): void {
    console.log({picture});
}

const myPic = {
    title: 'Test Title',
    date: '2022-04',
    orientation: PhotoOrientation.Landscape,
};

// showPicture(myPic);
// showPicture({
//     title: 'Test Title 2',
//     date: '2022-04',
//     orientation: PhotoOrientation.Portrait,
//     // extra: 'test',
// });

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture (config: PictureConfig) {
    const pic = {title: 'Defaul', date: '2020'};
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic
}

let picture = generatePicture({});
picture = generatePicture({title: 'Travel Pic'});
picture = generatePicture({title: 'Travel Pic', date: '2020-04'});
// console.log({picture});

// Interfaz: Usuario
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'galeed', isPro: true};
console.log({user});
user.username = 'XD';
// user.id = 20; // Error
console.log({user});