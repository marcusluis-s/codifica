import PropTypes from "prop-types";
import styles from "./SearchProduct.module.css";

function SearchProduct({ searchProduct, setSearchProduct }) {
    return (
        <div className={styles["search-product-container"]}>
            <header>
                <h1>Buscar produto</h1>
            </header>

            <form>
                <input
                    type="text"
                    id="search-product"
                    placeholder="Digite o nome de um produto (Ex: produto 1, 2...)"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                />
            </form>
        </div>
    )
}

SearchProduct.propTypes = {
    searchProduct: PropTypes.string.isRequired,
    setSearchProduct: PropTypes.func.isRequired,
};

export default SearchProduct;