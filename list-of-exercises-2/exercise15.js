const transacoes = [
    {
        tipo: "Entrada",
        montante: 1.00
    },
    {
        tipo: "Entrada",
        montante: 5.00
    },
    {
        tipo: "Saída",
        montante: 2.50
    }
];

let finalAmount = 0;
let sumDeposit = 0;
let sumWithdrawal = 0;

transacoes.forEach((n) => {
    if (n.tipo === "Entrada") {
        const deposit = n.montante;

        sumDeposit = sumDeposit + deposit;
    }
    
    if (n.tipo === "Saída") {
        const withdrawal = n.montante;

        sumWithdrawal = sumWithdrawal + withdrawal;
    }
});

finalAmount = sumDeposit - sumWithdrawal;

console.log("Soma total depósito:", sumDeposit);
console.log("Soma total saída:", sumWithdrawal);
console.log("Montante final:", finalAmount);
