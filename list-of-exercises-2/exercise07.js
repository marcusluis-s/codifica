const produtos = [
    { nome: "Pão", preco: 2.00, desconto: 0 },
    { nome: "Patinho moído", preco: 32.00, desconto: 0 },
    { nome: "Cerveja", preco: 8.54, desconto: 0 }
];

const produtosComDesconto = {};

produtos.forEach((product) => {
    const discount = 10 / 100;
    const newPrice = product.preco - discount;

    console.log(`Nome: ${product.nome}, Preço com desconto: ${newPrice.toFixed(2)}, Desconto: ${product.desconto}`);
});
