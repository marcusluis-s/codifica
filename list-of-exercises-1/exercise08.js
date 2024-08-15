// O código está funcional, mas eu sei que a lógica não é das melhores.
// Vai ser para estudar depois e tentar melhorar.

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Vocie irá fornecer dois valores e eles serão ordenados na ordem crescente.\n" +
            "Informe o primeiro valor: ", (val1) => {
    rl.question("Informe o segundo valor: ", (val2) => {
            const v1 = parseFloat(val1.replace(",", "."));
            const v2 = parseFloat(val2.replace(",", "."));

            const ascendingValues = [];

            if ((isNaN(v1)) || (isNaN(v2))) {
                console.error("Os valores fornecidos não são válidos. Tente novamente.");
            } else if (v1 === v2) {
                console.error("Os valores não podem ser iguais.");
            } else if ((v1 !== v2) && (v1 < v2)) {
                ascendingValues.push(v1);
                ascendingValues.push(v2);
                console.log(ascendingValues);
            } else if ((v1 !== v2) && (v1 > v2)) {
                ascendingValues.push(v2);
                ascendingValues.push(v1);
                console.log(ascendingValues);
            }

            rl.close();
        });
});

// Voltando aqui para dizer que eu posso melhorar o código usando o método `sort()`
