const x = "10";

// Converter x para número
const numX = parseInt(x);

// Checar se numX é um número inteiro
if (!Number.isInteger(numX)) {
  throw new Error("O valor de x não é inteiro!");
}

console.log("Continuando o código...");
