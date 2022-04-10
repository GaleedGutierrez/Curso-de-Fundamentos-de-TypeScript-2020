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

showPicture(myPic);
showPicture({
    title: 'Test Title 2',
    date: '2022-04',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test',
});