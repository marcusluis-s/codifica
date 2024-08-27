const vendas = [
    {
        produto: "Monitor Dell 32' 4K IPS",
        quantidade: 10,
        preco: 4000.00
    },
    {
        produto: "Monitor LG 32' 4K",
        quantidade: 20,
        preco: 3000.00
    },
    {
        produto: "Monitor Asus 32' 4K IPS",
        quantidade: 30,
        preco: 6000.00
    },
];

let total = 0;

vendas.forEach((sale) => {
    const totalProduct = sale.preco * sale.quantidade;
    
    total = total + totalProduct;
});

console.log(total.toFixed(2));
