import { Album } from "./album";

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

    addAlbum (album: Album): void {
        this.#album.push(album);
        console.log('this.#album:',this.#album);
    }

    removeAlbum(albumSearch: Album): Album | undefined {
        // Buscar Album
        const index = this.#album.findIndex(album => album.id === albumSearch.id);
        let deletedAlbum = undefined;
        if (index >= 0) {
            deletedAlbum = this.#album[index];
            this.#album.splice(index, 1);
        }
        console.log('this.#album:',this.#album);
        return deletedAlbum;
        // const newAlbum = this.#album.filter(album => album.id !== albumSearch.id);
        // this.#album = newAlbum;
        // let deletedAlbum = undefined;
        // if (this.#album.length !== newAlbum.length) {
        //     deletedAlbum = this.#album.find(album => album.id === albumSearch.id);
        // }
        // return deletedAlbum;
    }
}