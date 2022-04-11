import { PhotoOrientation } from './photoOrientation';

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