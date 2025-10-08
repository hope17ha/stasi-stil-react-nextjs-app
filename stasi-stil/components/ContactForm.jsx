import { useState } from "react";


export default function ContactForm(){

    const [state, setState] = useState(null);
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    async function onSubmit(e){
        e.preventDefault();
        setState = 'loading';

        const result = await fetch('/api/contacts', {
            method: POST,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        const data = await result.json();

        if (result.ok){
            setState('success');
            setFormData({name: '', email: '', message: ''});
        } else {
            setState('error');
            console.error(data.error);
        }
    }
}