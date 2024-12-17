import styles from "./Contact.module.css";

function Contact() {
    return (
        <div className={styles["contact-container"]}>
            <h1>Fale conosco</h1>

            <p>Nos envie uma mensagem através do formulário abaixo.</p>

            <form className={styles["form"]}>
                <label htmlFor="">Nome:</label>
                <div>
                    <input type="text" id="name" placeholder="Informe seu nome" />
                </div>

                <label htmlFor="email">Email:</label>
                <div>
                    <input type="email" id="email" placeholder="Informe seu e-mail" />
                </div>

                <div>
                    <textarea name="" id="" placeholder="Escreva sua mensagem"></textarea>
                </div>

                <div>
                    <button>Enviar mensagem</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;