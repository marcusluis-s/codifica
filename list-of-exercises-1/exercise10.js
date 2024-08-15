import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro: ", (num) => {
    const n = parseInt(num);

    if (isNaN(n)) {
        console.error("Entrada inválida. O valor esperado precisa ser um número inteiro.");
    } else if (n) {
        for (let i = 0; i < 10; i++) {
            console.log(n);
        }
    }

    rl.close();
});
