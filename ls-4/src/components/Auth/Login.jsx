import { useState, useMemo } from "react";

function Login({ onSuccess }) {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const isValid = useMemo(() => form.name && form.email && form.password, [form]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return alert("Заполните все поля");
        onSuccess();
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Вход</h2>
            <input name="name" placeholder="Имя" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Пароль" onChange={handleChange} />
            <button type="submit">Войти</button>
        </form>
    );
}

export default Login;
