const livro = {
    titulo: "Pálido Ponto Azul: Uma Visão do Futuro da Humanidade no Espaço",
    autor: "Carl Sagan",
    anoPublicacao: 1994,
    genero: "Ciência, Astronomia"
}

let publisherExists = false;

for (let key in livro) {
    if (key === "editora") {
        publisherExists = true;
        break;
    }
}

if (publisherExists === false) {
    livro.editora = "Random House";
} else {
    console.log("A propriedade 'editora' já existe no objeto 'livro'");
}

console.log(livro);

