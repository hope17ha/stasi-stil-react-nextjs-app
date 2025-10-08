import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Липсващи полета." },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return NextResponse.json(
                { error: 'Невалиден формат на email адрес.'},
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject: `Ново съобщение от ${name}`,
            html: `
            <p><strong>Име:</strong> ${name}</p>
            <p><strong>Имейл:</strong> ${email}</p>
            <p><strong>Съобщение:</strong></p>
            <p>${message}</p>
          `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Error sending email", err);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
