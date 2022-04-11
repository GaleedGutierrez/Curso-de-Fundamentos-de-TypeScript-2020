// Tipo Explicito
let nullVarialbe: null;
nullVarialbe = null;
// nullVarialbe = 1; // Error

const otherVariable = null;

console.log({nullVarialbe, otherVariable});

// Undefined
const undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error
const otherUndefined = undefined;
console.log({undefinedVariable, otherUndefined});

// Null y Undefined: como subtipos
// let albumName: string = null;
// albumName = null;
// albumName = undefined;

// --strictNullChecks