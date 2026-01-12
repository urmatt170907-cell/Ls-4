import { useState } from "react";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Products from "./components/Shop/Products";

function App() {
    const [page, setPage] = useState("register");

    return (
        <>
            {page === "register" && <Register onSuccess={() => setPage("products")} />}
            {page === "login" && <Login onSuccess={() => setPage("products")} />}
            {page === "products" && <Products onLogout={() => setPage("login")} />}
        </>
    );
}

export default App;
