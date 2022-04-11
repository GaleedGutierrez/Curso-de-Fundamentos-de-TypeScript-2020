export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

export class User {
    #album: Album[];
    
    constructor (
        private id: number,
        private username: string,
        private firstName: string,
        private isPro: boolean,
    ) {
        this.#album = [];
    }

    addAlbum (album: Album) {
        this.#album.push(album);
        console.log('this.#album:',this.#album);
    }
}

export abstract class Item {
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

export class Picture extends Item{
    // Propiedades 
    #orientation: PhotoOrientation;
    #date: string;

    constructor (
        id: number, 
        title: string, 
        date: string,
        orientation: PhotoOrientation
    ) {
        super(id, title);
        this.#date = date;
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

export class Album extends Item {
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