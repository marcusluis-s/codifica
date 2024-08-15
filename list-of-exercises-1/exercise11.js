import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nums = [];
let sum = 0;

function getUserInput() {
    if (nums.length < 5) {
        rl.question(`Informe o ${nums.length + 1} número: `, (num) => {
            const n = parseFloat(num.replace(",", "."));

            if (isNaN(n)) {
                console.error("Por favor, informe um valor válido, podendo ser um número inteiro ou decimal.");
                getUserInput();
            } else {
                nums.push(n);
                getUserInput();
            } 
        });
    } else {
        for (let i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }

        console.log(`Soma total: ${sum.toFixed(2)}`);
        rl.close();
    }
}

getUserInput();
