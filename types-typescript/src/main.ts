// Number
// Explicito

let phone: number;
phone = 1;
phone = 54234567;
// phone = 'Hola'; // Error

// Inferido
let phoneNumber = 54234567;
phoneNumber = 1231;
// phoneNumber = true; // Error por tipo de dato

let hex: number = 0x0a124bcdf;
let binariy: number = 0b00110101;
let octal: number = 0o0771234;

// Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;

// Tipado inferido
let isUserPro = false;
isUserPro = Boolean(false);

// String
// Tipo explicito
let username: string = 'Galeed';
// userName = true; // Error por tipo de dato

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    fistName: ${username} Gutierrez
    phone: ${phone}
    isPro: ${isPro}
`;

console.log(userInfo)