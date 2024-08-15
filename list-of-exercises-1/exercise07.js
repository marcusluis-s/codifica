import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function appleMarket() {
    console.log("Olá! Bem-vindo ao Apple Market! 🍎\n" +
            "As maçãs custam R$0,30 se forem compradas menos do que uma dúzia e\n" +
            "R$0,25 se forem compradas pelo menos doze.\n");

    rl.question("Quantas maçãs você deseja comprar? ", (apple) => {
        const apples = parseInt(apple);
        const applePriceInCents30 = 0.30;
        const applePriceInCents25 = 0.25;
        let total;

        if (isNaN(apples)) {
            console.error("Por favor, informe um valor válido.");
        } else if ((apples >= 1) && (apples < 12)) {
            total = apples * applePriceInCents30;
            console.log(`Valor total da compra: R$${total.toFixed(2)}`);
        } else if (apples >= 12) {
            total = apples * applePriceInCents25;
            console.log(`Valor total da compra: R$${total.toFixed(2)}`);
        } else {
            console.log("Por favor, insira um número natural positivo maior que zero.");
        }

        rl.close();
    });
}

appleMarket();
