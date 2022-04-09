// Orientación para fotografías

// const landcape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landcape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landcape;
// console.log(landscape);
// console.log(PhotoOrientation[landscape]);

enum PictureOrientation {
    Landcape = 10,
    Portrait,
    Square,
    Panorama
}

// console.log(PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp',
}

const country: Country = Country.Colombia;
console.log(country);