import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Shop/Card";

function App() {
    const [items, setItems] = useState([]);
    const [isModified, setIsModified] = useState(false);

    const fetchData = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setItems(res.data);
        setIsModified(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
        setIsModified(true);
    };

    return (
        <div>
            <div style={{ display: "flex", gap: "10px" }}>
                <h2>КАРТОЧКИ</h2>

                {isModified && (
                    <button onClick={fetchData}>🔄</button>
                )}
            </div>

            <div>
                {items.map(item => (
                    <Card
                        key={item.id}
                        item={item}
                        onDelete={deleteItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
