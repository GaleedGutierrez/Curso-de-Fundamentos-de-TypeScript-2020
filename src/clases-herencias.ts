export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

abstract class Item {
    public static photoOrientation = PhotoOrientation;
    readonly #id: number;
    #title: string;

    constructor (id: number, title: string) {
        this.#id = id;
        this.#title = title;
    }

    get id() {
        return this.#id;
    }

    // set id(id: number) {
    //     this.#id = id;
    // }

    get title() {
        return this.#title;
    }

    set title(title: string) {
        this.#title = title;
    }
}

class Picture extends Item{
    // Propiedades 
    #orientation: PhotoOrientation;

    constructor (id: number, title: string, orientation: PhotoOrientation) {
        super(id, title);
        this.#orientation = orientation;
    }

    // Comportamiento
    public toString () {
        return console.table(this);
    }

    showAll (type: string): void {
        const object: object = {
            name: type,
            id: this.id,
            title: this.title,
            orientation: this.#orientation,
        };
        console.table({object});
    }
}

class Album extends Item {
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }

    showAll (type: string): void {
        const object: object = {
            name: type,
            id: this.id,
            title: this.title,
            pictures: this.#pictures,
        };
        console.table({object});
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(2, 'Platzi session', PhotoOrientation.Square);
// picture.toString();
album.addPicture(picture);
// console.table({album});

// Accediendo a los miembrps publicos
// picture.id = 100;
picture.title = 'Another title'; // public
album.title = 'Personal Activities';
// console.table(album);
// console.table(picture);
// picture.showAll('picture');
// album.showAll('album');

// const item = new Item(1, 'Teste title'); // Error
// console.log('item.id:',item.id);
// console.log('item.title:', item.title);

// Probar el miembro estatico
console.log('PhotoOrientation:', Picture.photoOrientation.Landscape);