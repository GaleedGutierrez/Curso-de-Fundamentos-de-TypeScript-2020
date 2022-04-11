export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

class Picture {
    // Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation
    ) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    get id() {
        return this.#id;
    }

    set id(id: number) {
        this.#id = id;
    }

    get title() {
        return this.#title;
    }

    set title(title: string) {
        this.#title = title;
    }

    get orientation() {
        return this.#orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this.#orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return console.table(this);
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    get id() {
        return this.#id;
    }

    set id(id: number) {
        this.#id = id;
    }

    get title() {
        return this.#title;
    }

    set title(title: string) {
        this.#title = title;
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }

    showAll (): void {
        const object: object = {
            id: this.#id,
            title: this.#title,
            pictures: this.#pictures,
        };
        console.table({object});
    }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(
    2,
    "Platzi session",
    PhotoOrientation.Square
);
// picture.toString();
album.addPicture(picture);
// console.table({album});

// Accediendo a los miembrps publicos
picture.id = 100;
picture.title = "Another title"; // public
album.title = "Personal Activities";
album.showAll();
console.log(picture);
