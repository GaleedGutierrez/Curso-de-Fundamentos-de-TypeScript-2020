export {};
// <tipo> // Angle bracket syntax
let username: any;
username = 'galeed';

// tenemos una cadena, TS confia en mi.
let message: string = (<string>username).length > 5
    ? `Welcome, ${username}`
    : 'Username is too short';
// console.log({message})

let usernameWithId: any = 'galeed 1';
// ¿Cómo obtener el username?
username = (<string>usernameWithId).substring(0, 6);
// console.log({username})

message = (username as string).length > 5
    ? `Welcome, ${username}`
    : 'Username is too short';

let helloUser: any;
helloUser = `Hello paparazzi`;
username = (helloUser as string).substring(6);
console.log({username})
