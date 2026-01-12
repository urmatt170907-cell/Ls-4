import { useState, useMemo } from "react";

function Register({ onSuccess }) {
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
            <h2>Регистрация</h2>
            <input name="name" placeholder="Имя" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Пароль" onChange={handleChange} />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default Register;
