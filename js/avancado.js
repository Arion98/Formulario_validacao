const frutas = ["abacaxi","acerola","morango", "vergamota", "melancia"];

// frutas.unshift("melancia");

// console.log(frutas);

// frutas.shift();

// console.log(frutas);

// frutas.push("vergamota");

// console.log(frutas);



frutas.splice(0, 5, "japuticaba","pera");

console.log(frutas);

const numeros = [1,2,3,4,5,6];

const NumerosPares = numeros.filter((num) => num % 2 === 0);

console.log(NumerosPares);