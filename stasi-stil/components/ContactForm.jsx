"use client";
import { useState } from "react";

export default function ContactForm() {
    const [state, setState] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState('');

    async function onSubmit(e) {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setState('error');
            setErrorMessage('❌ Моля попълнете всички полета правилно.');
            return;
        }

        setState('loading');
        setErrorMessage('')

        try {
            const result = await fetch("/api/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await result.json();

            if (result.ok) {
                setState("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setState("error");
                setErrorMessage(data.error || 'Възникна грешка.');
            }
        } catch (error) {
            setState("error");
            console.error(err);
            return;
        }
    }

    function onChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (state !== null) {
            setState(null);
        }
    }

    return (
        <form
            noValidate
            onSubmit={onSubmit}
            className="space-y-4 bg-black/50 p-6 rounded-xl max-w-lg mx-auto"
        >
            <h3 className="text-2xl font-semibold text-center text-white mb-4">
                Изпрати съобщение
            </h3>

            <input
                type="text"
                name="name"
                placeholder="Име"
                value={formData.name}
                onChange={onChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Имейл"
                value={formData.email}
                onChange={onChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                required
            />

            <textarea
                placeholder="Съобщение"
                name="message"
                rows="5"
                value={formData.message}
                onChange={onChange}
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                required
            ></textarea>

            <button
                type="submit"
                disabled={state === "loading"}
                className="w-full bg-[#b4ac77] text-black font-semibold py-3 rounded hover:bg-[#c5bb7f] transition"
            >
                {state === "loading" ? "Изпращане..." : "Изпрати"}
            </button>

            {state === "success" && (
                <p className="text-green-400 text-center">
                    ✅ Съобщението е изпратено успешно!
                </p>
            )}
            {state === "error" && (
                <p className="text-red-400 text-center">
                    {errorMessage}
                </p>
            )}
        </form>
    );
}
