import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let exit = true;

function arithmeticMean() {
    if (exit) {
        rl.question("Calculando a média aritimética de números decimais.\n" +
            "Forneça um numéro decimal por vez e pressione Enter a cada entrada.\n" +
            "Para encerrar o programa digite o número zero (0) e pressione Enter: ", (num) => {

                const n = parseFloat(num.replace(",", "."));

                if (isNaN(n)) {
                    console.error("Por favor, insira apenas números decimais.");
                    arithmeticMean();
                } else if (n !== 0) {
                    arr.push(n);
                    arithmeticMean();
                } else {
                    if (arr.length > 0) {
                        let sum = 0;
                        for (let i = 0; i < arr.length; i++) {
                            sum = sum + arr[i];
                        }

                        const total = sum / arr.length;
                        console.log(`O resulto da média aritimética dos valores fornecidos é: ${total}`);
                    } else if (n === 0) {
                        exit = false;
                    }

                    rl.close();
                }  
            })
    }
}

arithmeticMean();
