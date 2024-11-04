import { useState } from "react";
import styles from "./SearchFilter.module.css";

function SearchFilter() {
    const [search, setSearch] = useState("");
    
    const brazilianSerieA2024 = [
        { name: "Botafogo", acronym: "BOT" },
        { name: "Palmeiras", acronym: "PAL" },
        { name: "Fortaleza", acronym: "FOR" },
        { name: "Flamengo", acronym: "FLA" },
        { name: "Internacional", acronym: "INT" },
        { name: "São Paulo", acronym: "SAO" },
        { name: "Bahia", acronym: "BAH" },
        { name: "Cruzeiro", acronym: "CRU" },
        { name: "Vasco", acronym: "VAS" },
        { name: "Atlético-MG", acronym: "CAM" },
        { name: "Grêmio", acronym: "GRE" },
        { name: "Criciúma", acronym: "CRI" },
        { name: "Red Bull Bragantino", acronym: "RBB" },
        { name: "Juventude", acronym: "ECJ" },
        { name: "Athletico-PR", acronym: "CAP" },
        { name: "Fluminense", acronym: "FLU" },
        { name: "Vitória", acronym: "VIT" },
        { name: "Corinthians", acronym: "COR" },
        { name: "Cuiabá", acronym: "CUI" },
        { name: "Atlético-GO", acronym: "AGO" }
    ];

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className={styles["container-filter"]}>
            <header>
                <h2>5 - Filtro de Lista</h2>
            </header>

            <p style={{display: "none"}}>
                Credit:
                <a href="https://www.youtube.com/watch?v=xAqCEBFGdYk" target="_blank">
                    Search Filter in React JS - Filter Through Results
                </a>
            </p>

            <header>
                <h3>Digite o nome de um time de futebol do Campeonato Brasileiro Série A 2024</h3>
            </header>

            <form>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Digite o nome do time"
                />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nome do time</th>
                        <th>Sigla</th>
                    </tr>
                </thead>

                <tbody>
                    {brazilianSerieA2024
                        .filter((team) => {
                            return search.trim().toLowerCase() === ""
                            ? team
                            : team.name.trim().toLowerCase().includes(search.trim().toLowerCase());
                        })
                        .map((team, index) => (
                        <tr key={index}>
                            <td>{team.name}</td>
                            <td>{team.acronym}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}

export default SearchFilter;
