// Void

// Tipo explicito

function showInfo (user: any): void {
    console.log('User Info:', user.id, user.username, user.firstName);
    // return 'Hola';
}

// showInfo({id: 1, username: 'Galeed', firstName:'GaleedXD'});

// Tipo inferido
function showFormattedInfo (user: any) {
    console.log('User Info:', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `

    );
}

// showFormattedInfo({id: 1, username: 'Galeed', firstName:'GaleedXD'});

// Tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null;
unusable = undefined;

// Tipo: Never

function handleError (code: number, message: string): never {
    // Process your code here
    // Gerarte a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not found');
} catch (error) {

}

function sumNumbers (limit: number): never{
    let sum: number = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
// sumNumbers(10);

// Ciclo infinito, porgrama nunca termina.