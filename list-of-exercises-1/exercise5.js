import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Calcule o seu IMC. Informe o seu peso em kg: ", (weight) => {
    rl.question("Informe a sua altura em metros: ", (height) => {
        let personWeight = parseFloat(weight);
        let personHeight = parseFloat(height);

        let result = personWeight / (Math.pow(personHeight, 2));

        if ((isNaN(personWeight)) || (isNaN(personHeight))) {
            console.error("Por favor, informe corretamente seu peso e sua altura.\n" +
                        "Exemplo, peso: [68.5]\n" +
                        "Exemplo, altura: [1.74]\n");
        } else if ((result >= 17) && (result <= 18.4)) {
            console.log(`Abaixo do peso. Seu IMC é: ${result.toFixed(2)}`);
        } else if ((result >= 18,5) && (result <= 24.9)) {
            console.log(`Peso normal. Seu IMC é: ${result.toFixed(2)}`);
        } else if ((result >= 25) && (result <= 29.9)) {
            console.log(`Sobrepeso. Seu IMC é: ${result.toFixed(2)}`);
        } else if ((result >= 30) && (result <= 34.9)) {
            console.log(`Obesidade. Seu IMC é: ${result.toFixed(2)}`);
        } else {
            console.log("Seu IMC não se encaixa em nenhuma das classificações disponíveis.\n" +
                    "Mas, não se preocupe, ela deve existir.");
        }

        rl.close();
    }); 
});
