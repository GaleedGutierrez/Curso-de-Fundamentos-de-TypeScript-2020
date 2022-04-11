import { Item } from './item';
import { PhotoOrientation } from './photoOrientation';

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