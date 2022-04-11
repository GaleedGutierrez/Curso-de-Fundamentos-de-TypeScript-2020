import { Album, PhotoOrientation, Picture, User } from './photo-app';

const user = new User(1, 'galeed', 'Galeed', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2022-04', PhotoOrientation.Landscape);

// Creamos realaciones
user.addAlbum(album);
album.addPicture(picture);

console.log({user});