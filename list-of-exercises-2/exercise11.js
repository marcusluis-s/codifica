const pedidos = [
    {
        cliente: "Marcus",
        produto: "Monitor Dell 32' 4K IPS",
        quantidade: 10
    },
    {
        cliente: "Luís",
        produto: "Monitor LG 32' 4K",
        quantidade: 20
    },
    {
        cliente: "Silva",
        produto: "Monitor Asus 32' 4K IPS",
        quantidade: 30
    },
];

const qntProductsByClient = [];

pedidos.forEach((order) => {
    qntProductsByClient.push({ cliente: order.cliente, quantidade: order.quantidade });
});

console.log(qntProductsByClient);
