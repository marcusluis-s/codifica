import { useState } from "react";
import styles from "./TabNavigation.module.css";

function TabNavigation() {
    const [currentTab, setCurrentTab] = useState("about");

    const handleToggleContent = (tabName) => {
        setCurrentTab(tabName);
    }

    return (
        <div className={styles["container-tab-navigation"]}>
            <header>
                <h2>10 - Componentes com Tabs Navegáveis</h2>
            </header>
            <div>
                <button 
                    onClick={() => handleToggleContent("about")}
                    className={currentTab === "about" ? styles["active-tab-color"] : ""}
                >
                    Sobre
                </button>
                <button 
                    onClick={() => handleToggleContent("contact")}
                    className={currentTab === "contact" ? styles["active-tab-color"] : ""}
                >
                    Contato
                </button>
            </div>
            
            <div>
                {currentTab === "about" && (
                    <section>
                        <header>
                            <h2>Sobre</h2>
                        </header>

                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                    </section>
                )}
                
                {currentTab === "contact" && (
                    <section>
                        <header>
                            <h2>Contato</h2>
                        </header>

                        <ul>
                            <li>###-#####-####</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </section>
                )}
            </div>
        </div>
    )
}

export default TabNavigation;
