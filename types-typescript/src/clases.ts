export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

class Picture {
    // Propiedades 
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor (id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString () {
        const { id, title, orientation } = this;
        return console.table(this);
    }
}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor (id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

   public addPicture (picture: Picture) {
        const { pictures } = this;
        pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(2, 'Platzi session', PhotoOrientation.Square);
// picture.toString();
album.addPicture(picture);
// console.table({album});

// Accediendo a los miembrps publicos
picture.id = 100;
picture.title = 'Another title'; // public
album.title = 'Personal Activities';
console.table(album);
console.table(picture);