"use client";
import { use, useState } from "react";

export default function ContactForm() {
    const [state, setState] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    async function onSubmit(e) {
        e.preventDefault();
        setState('loading');

        const result = await fetch("/api/contacts", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await result.json();

        if (result.ok) {
            setState("success");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setState("error");
            console.error(data.error);
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="space-y-4 bg-black/50 p-6 rounded-xl max-w-lg mx-auto"
        >
            <h3 className="text-2xl font-semibold text-center text-white mb-4">
                Изпрати съобщение
            </h3>

            <input
                type="text"
                placeholder="Име"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                required
            />

            <input
                type="email"
                placeholder="Имейл"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none"
                required
            />

            <textarea
                placeholder="Съобщение"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value })}
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
                    ❌ Възникна грешка. Опитайте отново.
                </p>
            )}
        </form>
    );
}
