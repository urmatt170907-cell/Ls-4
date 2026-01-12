import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Products({ onLogout }) {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [hasDeleted, setHasDeleted] = useState(false);

    const loadProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
                setOriginalProducts(res.data);
                setHasDeleted(false);
            })
            .catch((err) => console.error("Ошибка загрузки данных:", err));
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = (id) => {
        setProducts(products.filter((item) => item.id !== id));
        setHasDeleted(true);
    };

    const handleReload = () => {
        setProducts(originalProducts);
        setHasDeleted(false);
    };

    return (
        <div className="container">
            <button className="logout-btn" onClick={onLogout}>
                Выйти
            </button>

            <div className="header">
                <h2> Карточки </h2>
                {hasDeleted && (
                    <button className="reload-btn" onClick={handleReload}>
                        🔄
                    </button>
                )}
            </div>

            <div className="card-list">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        item={product}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
