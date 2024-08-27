const filmes = [
    { titulo: "The Seventh Seal", diretor: "Ingmar Bergman", anoLancamento: 1957 },
    { titulo: "Gladiator", diretor: "Ridley Scott", anoLancamento: 2000 },
    { 
        titulo: "The Internet's Own Boy: The Story of Aaron Swartz",
        diretor: "Brian Knappenberger",
        anoLancamento: 2014
    }
];

const titles = [];

filmes.forEach((title) => {
    titles.push(title.titulo);
});

console.log(titles);
