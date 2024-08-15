import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial() {
    rl.question("Forneça um número para que seja calculado seu fatorial: ", (num) => {
        const n = parseInt(num);
        let result = 1;

        if (isNaN(n)) {
            console.error("Valor inválido! Por favor, forneça um número inteiro.");
            factorial();
        }

        for (let i = 1; i <= n; i++) {
            result = result * i;
        }

        console.log(`O fatorial de ${n} é: ${result}`);

        rl.close();
    });
}

factorial();
