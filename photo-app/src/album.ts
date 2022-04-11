import { Item } from './item';
import { Picture } from './picture';

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