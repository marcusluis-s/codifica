import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escolha um dos três alimentos disponíveis:\n" +
            "Digite 1 para: Pizza 🍕\n" +
            "Digite 2 para: Bacon 🥓\n" +
            "Digite 3 para: Nabemono 🍲\n", (food) => {
    let foodOption = parseInt(food);
    let message;

    switch (foodOption) {
        case 1:
            message = "Pizza 🍕";
            console.log("Você escolheu: %s", message);
            break;
        case 2:
            message = "Bacon 🥓";
            console.log("Você escolheu: %s", message);
            break;
        case 3:
            message = "Nabemono 🍲";
            console.log("Você escolheu: %s", message);
            break;
        default:
            console.error("Opção inválida!");
            break;
    }

    rl.close();
});
