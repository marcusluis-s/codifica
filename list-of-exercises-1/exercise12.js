import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro qualquer para que seja exibido a tabuada de 1 a 10: ", (num) => {
    const n = parseInt(num);

    if (n === 0) {
        console.log("O número fornecido precisa ser maior que zero.");
    } else if (isNaN(n)) {
        console.error("O valor não fornecido não é válido.");
    } else if (true) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${n} * ${i} = ${n * i}`);
        }
    } 

    rl.close();
});
