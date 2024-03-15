// Mais de um valor
const x = 10;
const y = "William";
const z = [1, 2];

console.log(x, y, z);

// Contagem de impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// Variavel entre string
console.log("O nome dele é %s, ele é programador", y);

// Limpar console
setTimeout(() => {
  console.clear();
}, 2000);
