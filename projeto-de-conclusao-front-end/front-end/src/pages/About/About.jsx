import styles from "./About.module.css";

function About() {
    return (
        <div className={styles["about-container"]}>
            <h1>Sobre nós</h1>

            <p>
                Bem-vindo à nossa plataforma! Somos dedicados a oferecer produtos de alta
                qualidade - <mark><em>pois são todos do Clube de Regatas do Flamengo</em></mark> -
                e proporcionar uma experiência de <strike>compra</strike> excepcional para nossos clientes.
            </p>

            <p>
                Obrigado por escolher nossa plataforma.
            </p>
        </div>
    );
}

export default About;