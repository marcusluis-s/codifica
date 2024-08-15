import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangle() {
    console.log("Informe três valores para os lados de um triângulo: A, B, C.\n" +
            "Verificaremos se os valores fornecidos formam um triângulo Equilátero, Isósceles ou Escaleno.\n");
    rl.question("Por favor, informe o valor do lado do triângulo A: ", (sideA) => {
        rl.question("Agora, informe o valor do lado do triângulo B: ", (sideB) => {
            rl.question("Por fim, informe o valor do lado do triângulo C: ", (sideC) => {
                const A = parseFloat(sideA.replace(",", "."));
                const B = parseFloat(sideB.replace(",", "."));
                const C = parseFloat(sideC.replace(",", "."));

                if ((isNaN(A)) || (isNaN(B)) || (isNaN(C))) {
                    console.error("\nPor favor, insira um valor válido. (podendo ser um número inteiro ou decimal)");
                } else if ((A === B) && (B === C)) {
                    console.log("\nCom base nos valores fornecidos o seu triângulo é equilátero.");
                } else if ((A === B) || (A === C) || (B === C)) {
                    console.log("\nCom base nos valores fornecidos o seu triângulo é isósceles.");
                } else if ((A !== B) && (B !== C)) {
                    console.log("\nCom base nos valores fornecidos o seu triângulo é escaleno.");
                }

                rl.close();
            });
        });
    });
}

triangle();
